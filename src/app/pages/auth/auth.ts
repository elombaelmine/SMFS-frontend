import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class Auth implements OnInit {
  // true = Login Form State, false = Sign Up Form State
  isLoginMode: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('[AUTH] Access terminal state initialized.');
  }

  /**
   * Toggles the UI interface fields dynamically between Login and Sign Up
   * @param mode boolean parameter setting state direction
   */
  toggleMode(mode: boolean): void {
    this.isLoginMode = mode;
    console.log(`[AUTH] Switched state interface tracking. Login Mode Active: ${this.isLoginMode}`);
  }

  /**
   * Submits form content maps downstream to authenticate session access parameters
   */
  onAuthSubmit(): void {
    console.log('[AUTH] Dispatching credentials payload checks to verification nodes...');
    
    // Simulate successful validation pipeline check
    // Routes operator directly into the core app dashboard grid wrapper shell frame
    this.router.navigate(['/dashboard']);
  }
}