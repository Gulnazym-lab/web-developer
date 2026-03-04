import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {
    console.log('AlbumPhotosComponent created');
  }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Album ID:', this.albumId);
    this.loadPhotos();
  }

  loadPhotos(): void {
    console.log('Loading photos...');
    
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        console.log('Photos received:', data.length);
        console.log('First photo:', data[0]);
        
        // URL-дерді тазалау (үтірлерді өшіру)
        this.photos = data.map(photo => ({
          ...photo,
          thumbnailUrl: photo.thumbnailUrl.replace(/,/g, ''),
          url: photo.url.replace(/,/g, '')
        }));
        
        this.loading = false;
        console.log('Photos processed, loading=false');
      },
      error: (err) => {
        console.error('ERROR loading photos:', err);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}