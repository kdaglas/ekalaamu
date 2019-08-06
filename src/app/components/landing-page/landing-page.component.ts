import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const slides = document.querySelectorAll('.slide');
    const auto = true; // Auto scroll
    const intervalTime = 5000;
    let slideInterval;

    const nextSlide = () => {
      const current = document.querySelector('.current');
      current.classList.remove('current');
      if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
      } else {
        slides[0].classList.add('current');
      }
      setTimeout(() => current.classList.remove('current'));
    };

    // Auto slide
    if (auto) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }
}
