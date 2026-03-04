import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // ДОБАВЬТЕ ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  error: string | null = null;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef  // ДОБАВЬТЕ ЭТО
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const numericId = Number(id);
    
    this.albumService.getAlbum(numericId).subscribe({
      next: (data) => {
        console.log('Album loaded:', data);
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
        this.cdr.detectChanges();  // ПРИНУДИТЕЛЬНОЕ ОБНОВЛЕНИЕ!
        console.log('UI should update now');
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = 'Failed to load album';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  save(): void {
    if (!this.album || !this.editedTitle.trim()) return;
    
    const updatedAlbum = { ...this.album, title: this.editedTitle };
    
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (updated) => {
        this.album = updated;
        this.cdr.detectChanges();
        alert('Album updated!');
      },
      error: (err) => console.error('Update failed:', err)
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  viewPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}