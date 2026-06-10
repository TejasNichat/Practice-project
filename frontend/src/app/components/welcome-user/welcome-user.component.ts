import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="welcome-container user-welcome">
      <div class="navbar">
        <h1>Welcome User</h1>
        <button (click)="logout()" class="logout-btn">Logout</button>
      </div>
      
      <div class="content">
        <div class="user-info">
          <h2>Hello, {{ user?.username }}!</h2>
          <div class="info-card">
            <p><strong>Email:</strong> {{ user?.email }}</p>
            <p><strong>Role:</strong> <span class="role-badge user">{{ user?.role }}</span></p>
            <p><strong>User ID:</strong> {{ user?.id }}</p>
          </div>
        </div>

        <div class="dashboard">
          <h3>User Dashboard</h3>
          <div class="features">
            <div class="feature-card">
              <h4>Profile</h4>
              <p>View and manage your profile information</p>
            </div>
            <div class="feature-card">
              <h4>Settings</h4>
              <p>Customize your preferences and notifications</p>
            </div>
            <div class="feature-card">
              <h4>Activity</h4>
              <p>Check your recent activity and login history</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .welcome-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .user-welcome {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
    }

    .navbar h1 {
      color: white;
      margin: 0;
      font-size: 28px;
    }

    .logout-btn {
      padding: 10px 20px;
      background: white;
      color: #f5576c;
      border: none;
      border-radius: 5px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .logout-btn:hover {
      transform: scale(1.05);
    }

    .content {
      padding: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .user-info {
      margin-bottom: 40px;
    }

    .user-info h2 {
      color: white;
      font-size: 32px;
      margin-bottom: 20px;
    }

    .info-card {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .info-card p {
      margin: 12px 0;
      color: #333;
      font-size: 16px;
    }

    .info-card strong {
      color: #555;
      font-weight: 600;
    }

    .role-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 12px;
      text-transform: uppercase;
    }

    .role-badge.user {
      background: #f5576c;
      color: white;
    }

    .dashboard {
      margin-top: 30px;
    }

    .dashboard h3 {
      color: white;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .feature-card {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }

    .feature-card h4 {
      color: #f5576c;
      margin-bottom: 10px;
      font-size: 18px;
    }

    .feature-card p {
      color: #666;
      margin: 0;
      font-size: 14px;
    }
  `]
})
export class WelcomeUserComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
