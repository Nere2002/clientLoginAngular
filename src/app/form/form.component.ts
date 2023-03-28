import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  form: FormGroup | undefined;
  image: File | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.image = file;
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();
      formData.append('title', this.form.get('title').value);
      formData.append('description', this.form.get('description').value);
      formData.append('image', this.image);

      this.http.post('/api/upload', formData).subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);
          // Reset the form and clear the image
          this.form.reset();
          this.image = null;
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }
}
