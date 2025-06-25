<template>
  <section id="registration-section">
    <div class="container">
      <h2>Working with POST request</h2>
      
      <div v-if="isSuccess" class="success-message">
        <div class="success-content">
          <h3>User successfully registered</h3>
          <p>Your registration has been completed successfully!</p>
        </div>
      </div>
      
              <form v-else @submit.prevent="submitForm">
        <div class="field">
          <input
            v-model="form.name"
            type="text"
            name="name"
            placeholder="Your name"
            :class="{ 'error': errors.name }"
            @blur="validateField('name')"
            required
          />
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
        </div>

        <div class="field">
          <input
            v-model="form.email"
            type="email"
            name="email"
            placeholder="Email"
            :class="{ 'error': errors.email }"
            @blur="validateField('email')"
            required
          />
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>

        <div class="field">
          <input
            v-model="form.phone"
            type="tel"
            name="phone"
            placeholder="Phone"
            :class="{ 'error': errors.phone }"
            @blur="validateField('phone')"
            required
          />
          <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
          <small class="helper-text">+38 (XXX) XXX - XX - XX</small>
        </div>

        <fieldset class="field position-list">
          <legend>Select your position</legend>
          <div v-if="loadingPositions" class="loading-positions">
            Loading positions...
          </div>
          <div v-else>
            <label v-for="position in positions" :key="position.id">
              <input
                v-model="form.position_id"
                type="radio"
                name="position"
                :value="position.id"
                @change="validateField('position_id')"
                required
              />
              {{ position.name }}
            </label>
          </div>
          <span v-if="errors.position_id" class="error-message">{{ errors.position_id }}</span>
        </fieldset>

        <div class="field">
          <div class="file-input-wrapper">
            <input
              ref="fileInput"
              type="file"
              name="photo"
              accept="image/jpeg,image/jpg"
              :class="{ 'error': errors.photo }"
              @change="handleFileChange"
              id="photo-upload"
              required
            />
            <label for="photo-upload" class="file-input-label">
              <span>{{ fileName || 'Upload your photo' }}</span>
              <span class="file-button">Browse</span>
            </label>
          </div>
          <span v-if="errors.photo" class="error-message">{{ errors.photo }}</span>
          <small class="helper-text">JPG/JPEG format, max 5MB, min 70x70px</small>
        </div>

        <button 
          type="submit" 
          class="btn btn--primary submit-btn"
          :disabled="isSubmitting || !isFormValid"
        >
          {{ isSubmitting ? 'Submitting...' : 'Sign up' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { apiService } from '../services/api'

export default {
  name: 'RegistrationSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        position_id: null,
        photo: null
      },
      positions: [],
      loadingPositions: true,
      isSubmitting: false,
      isSuccess: false,
      fileName: '',
      errors: {}
    }
  },
  computed: {
    isFormValid() {
      return (
        this.form.name &&
        this.form.email &&
        this.form.phone &&
        this.form.position_id &&
        this.form.photo &&
        Object.keys(this.errors).length === 0
      )
    }
  },
  async mounted() {
    await this.loadPositions()
  },
  methods: {
    async loadPositions() {
      try {
        this.loadingPositions = true
        const positions = await apiService.getPositions()
        this.positions = positions
        this.loadingPositions = false
      } catch (error) {
        console.error('Error loading positions:', error)
        this.loadingPositions = false
      }
    },

    validateField(fieldName) {
      this.$delete(this.errors, fieldName)

      switch (fieldName) {
        case 'name':
          if (!this.form.name || this.form.name.length < 2 || this.form.name.length > 60) {
            this.$set(this.errors, 'name', 'Name must be 2-60 characters long')
          }
          break

        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!this.form.email || !emailRegex.test(this.form.email)) {
            this.$set(this.errors, 'email', 'Please enter a valid email address')
          }
          break

        case 'phone':
          const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/
          if (!this.form.phone || !phoneRegex.test(this.form.phone)) {
            this.$set(this.errors, 'phone', 'Phone should start with +380 and contain 12 digits')
          }
          break

        case 'position_id':
          if (!this.form.position_id) {
            this.$set(this.errors, 'position_id', 'Please select a position')
          }
          break

        case 'photo':
          if (!this.form.photo) {
            this.$set(this.errors, 'photo', 'Please upload a photo')
          }
          break
      }
    },

    handleFileChange(event) {
      const file = event.target.files[0]
      
      if (!file) {
        this.form.photo = null
        this.fileName = ''
        return
      }

      // Validate file type
      if (!['image/jpeg', 'image/jpg'].includes(file.type)) {
        this.$set(this.errors, 'photo', 'Only JPG/JPEG format is allowed')
        this.form.photo = null
        this.fileName = ''
        return
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        this.$set(this.errors, 'photo', 'File size should not exceed 5MB')
        this.form.photo = null
        this.fileName = ''
        return
      }

      // Validate image dimensions
      const img = new Image()
      img.onload = () => {
        if (img.width < 70 || img.height < 70) {
          this.$set(this.errors, 'photo', 'Image should be at least 70x70 pixels')
          this.form.photo = null
          this.fileName = ''
          this.$refs.fileInput.value = ''
        } else {
          this.$delete(this.errors, 'photo')
          this.form.photo = file
          this.fileName = file.name
        }
      }
      img.src = URL.createObjectURL(file)
    },

    validateForm() {
      this.validateField('name')
      this.validateField('email')
      this.validateField('phone')
      this.validateField('position_id')
      this.validateField('photo')
    },

    async submitForm() {
      this.validateForm()
      
      if (!this.isFormValid) {
        return
      }

      try {
        this.isSubmitting = true
        
        await apiService.registerUser(this.form)
        
        this.isSuccess = true
        this.isSubmitting = false
        
        // Emit event to refresh users list
        this.$emit('user-registered')
        
      } catch (error) {
        console.error('Registration error:', error)
        this.isSubmitting = false
        
        // Handle validation errors from API
        if (error.response && error.response.data && error.response.data.fails) {
          const apiErrors = error.response.data.fails
          Object.keys(apiErrors).forEach(field => {
            this.$set(this.errors, field, apiErrors[field][0])
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  position: relative;
}

.field input:focus {
  outline: none;
  border-color: var(--cyan);
}

.field input.error {
  border-color: #d32f2f;
}

.error-message {
  display: block;
  color: #d32f2f;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

.helper-text {
  display: block;
  color: var(--text-light);
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.position-list {
  border: none;
  padding: 0;
}

.position-list legend {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}

.position-list > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.position-list label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
}

.loading-positions {
  color: var(--text-light);
  font-style: italic;
}

/* File input styling */
.file-input-wrapper {
  position: relative;
}

.file-input-wrapper input[type="file"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.file-input-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--grey);
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;
  background: #fff;
  transition: border-color 0.2s ease;
}

.file-input-label:hover {
  border-color: var(--cyan);
}

.file-input-wrapper input.error + .file-input-label {
  border-color: #d32f2f;
}

.file-button {
  background: var(--grey);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.success-message {
  text-align: center;
  padding: 2rem;
  background: #e8f5e8;
  border-radius: 8px;
  border: 2px solid #4caf50;
}

.success-content h3 {
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

.success-content p {
  color: #388e3c;
}
</style> 