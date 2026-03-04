import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error: string | null = null;
  
  // Жаңа альбом қосу үшін
  newAlbumTitle = '';
  adding = false;

  constructor(
    private albumService: AlbumService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.error = null;
    
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        console.log('Albums loaded:', data.length);
        setTimeout(() => {
          this.albums = data;
          this.loading = false;
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        console.error('Error loading albums:', err);
        setTimeout(() => {
          this.error = 'Failed to load albums';
          this.loading = false;
          this.cdr.detectChanges();
        });
      }
    });
  }

  addAlbum(): void {
    if (!this.newAlbumTitle.trim() || this.adding) return;

    this.adding = true;
    
    // Жаңа альбом объектісі
    const newAlbum: Omit<Album, 'id'> = {
      userId: 1, // JSONPlaceholder стандартты userId = 1
      title: this.newAlbumTitle.trim()
    };

    this.albumService.createAlbum(newAlbum).subscribe({
      next: (createdAlbum) => {
        console.log('Album created:', createdAlbum);
        
        setTimeout(() => {
          // Жаңа альбомды тізімнің басына қосу
          this.albums = [createdAlbum, ...this.albums];
          this.newAlbumTitle = '';
          this.adding = false;
          this.cdr.detectChanges();
          
          alert('Album added successfully!');
        });
      },
      error: (err) => {
        console.error('Error creating album:', err);
        setTimeout(() => {
          alert('Failed to create album');
          this.adding = false;
          this.cdr.detectChanges();
        });
      }
    });
  }

  onDelete(id: number, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          setTimeout(() => {
            this.albums = this.albums.filter(album => album.id !== id);
            this.cdr.detectChanges();
            console.log(`Album ${id} deleted`);
          });
        },
        error: (err) => {
          console.error('Delete failed:', err);
          alert('Failed to delete album');
        }
      });
    }
  }
}