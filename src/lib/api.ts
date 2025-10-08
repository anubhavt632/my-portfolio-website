const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

class ApiClient {
  private async request(endpoint: string, options?: RequestInit) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  }

  // Auth
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  // Projects
  async getProjects(params?: { category?: string; subcategory?: string; featured?: boolean }) {
    const query = new URLSearchParams();
    if (params?.category) query.append('category', params.category);
    if (params?.subcategory) query.append('subcategory', params.subcategory);
    if (params?.featured !== undefined) query.append('featured', params.featured.toString());
    
    return this.request(`/projects?${query.toString()}`);
  }

  async getProject(id: string) {
    return this.request(`/projects/${id}`);
  }

  async createProject(data: any) {
    return this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateProject(id: string, data: any) {
    return this.request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteProject(id: string) {
    return this.request(`/projects/${id}`, {
      method: 'DELETE',
    });
  }

  // Contact
  async submitContact(data: { name: string; email: string; phone?: string; projectType: string; message: string }) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const api = new ApiClient();
