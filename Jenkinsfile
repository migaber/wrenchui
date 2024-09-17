pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the repository
                git url: 'https://your-repo-url.git', branch: 'main'
            }
        }

        stage('Install Yarn') {
            steps {
                // Install Yarn
                sh 'npm install -g yarn'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies using Yarn
                sh 'yarn install'
            }
        }

        stage('Build') {
            steps {
                // Run the build command
                sh 'yarn build'
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
