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
                bat "docker -p 3000:3000 -d run pizzaapp"
            }
        }
    }
}