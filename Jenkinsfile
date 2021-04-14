pipeline {
    agent any

    stages {
        stage('Build Code') {
           steps {
             
             bat 'npm install'  
              
               
            }
        }
       
       
        stage('Build Image') {
         steps {
             script{
           
              //  }
              docker.withRegistry('https://793737242214.dkr.ecr.us-east-1.amazonaws.com',
                     'ecr:us-east-1:AWS_EKS')
                   {
                     def myImage=docker.build('react-app')
                            
                   }
             }
        }
        }
        stage('Push Image') {
            steps {
              script{
docker.withRegistry('https://793737242214.dkr.ecr.us-east-1.amazonaws.com',
                     'ecr:us-east-1:AWS_EKS')
                   {
                     def appImage=docker.build('react-app')
                            appImage.push('1.0.8')
                   }
              }
          
}
               
            }
        
    }
}