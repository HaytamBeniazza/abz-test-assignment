import axios from 'axios'

// Base API URL - Replace with actual API endpoint from assignment
const API_BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1'

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// API service class
class ApiService {
  /**
   * Get token for API requests
   */
  async getToken() {
    try {
      const response = await apiClient.get('/token')
      return response.data.token
    } catch (error) {
      console.error('Error fetching token:', error)
      throw error
    }
  }

  /**
   * Get users with pagination
   * @param {number} page - Page number (default: 1)
   * @param {number} count - Number of users per page (default: 6)
   * @returns {Promise<Object>} Users data with pagination
   */
  async getUsers(page = 1, count = 6) {
    try {
      const response = await apiClient.get('/users', {
        params: {
          page,
          count
        }
      })
      return response.data
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error
    }
  }

  /**
   * Get all available positions
   * @returns {Promise<Array>} Array of positions
   */
  async getPositions() {
    try {
      const response = await apiClient.get('/positions')
      return response.data.positions
    } catch (error) {
      console.error('Error fetching positions:', error)
      throw error
    }
  }

  /**
   * Register a new user
   * @param {Object} userData - User registration data
   * @param {string} userData.name - User name
   * @param {string} userData.email - User email
   * @param {string} userData.phone - User phone
   * @param {number} userData.position_id - Position ID
   * @param {File} userData.photo - User photo file
   * @returns {Promise<Object>} Registration response
   */
  async registerUser(userData) {
    try {
      // Get token first
      const token = await this.getToken()
      
      // Create FormData for file upload
      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('email', userData.email)
      formData.append('phone', userData.phone)
      formData.append('position_id', userData.position_id)
      formData.append('photo', userData.photo)

      const response = await apiClient.post('/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Token': token
        }
      })

      return response.data
    } catch (error) {
      console.error('Error registering user:', error)
      throw error
    }
  }

  /**
   * Get user by ID
   * @param {number} userId - User ID
   * @returns {Promise<Object>} User data
   */
  async getUserById(userId) {
    try {
      const response = await apiClient.get(`/users/${userId}`)
      return response.data.user
    } catch (error) {
      console.error('Error fetching user:', error)
      throw error
    }
  }
}

// Export singleton instance
export const apiService = new ApiService()
export default apiService 