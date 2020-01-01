import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PostsService } from "../posts.service";
import { Post } from "../post.model";
import { _MatCheckboxRequiredValidatorModule } from '@angular/material';

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  post: Post;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  private postId: string;


  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      'caption': new FormControl(null, {validators: []}),
      'image': new FormControl(null, {validators: [Validators.required]})
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.post = {id: postData._id, caption: postData.caption};
        });
        this.form.setValue({"caption": this.post.caption});
      }
      else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0]; // could be many, not just first image
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    console.log(file);
    console.log(this.form);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    if (this.mode === "create") {
      this.postsService.addPost(this.form.value.caption);
    }
    else {
      this.postsService.updatePost(
        this.postId,
        this.form.value.caption
      );
    }
    this.form.reset();
  }
}
