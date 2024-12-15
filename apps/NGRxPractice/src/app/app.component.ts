import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './features/counter/counter.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductsComponent } from './features/shopping/products/products.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    ProductsComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NGRxPractice';
}
