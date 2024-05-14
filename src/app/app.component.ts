import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'recipe-app';

  selectedFeature = 'recipe';

  onFeatureSelected(feature: string) {
    this.selectedFeature = feature;
  }
}
