pipeline {
    agent any

    stages {
        stage('Build Pizza App') {
            steps{
                bat "docker build -t pizzaapp ."
            }
        }
         stage('Run Pizza App') {
            steps{
                bat "docker run -d -p 3000:3000 pizzaapp"
            }
        }
    }
}