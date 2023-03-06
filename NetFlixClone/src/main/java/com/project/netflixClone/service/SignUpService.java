package com.project.netflixClone.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.netflixClone.model.SignUp;
import com.project.netflixClone.repository.SignUpRepository;

@Service("signUpService")
public class SignUpService
{

	@Autowired
	SignUpRepository signUpRepository;
	
	
	public int createUser(SignUp user)
	{

		
		 signUpRepository.save(user);
		 return 1;
	}

	public Optional<SignUp> login(String email) 
	{
		
		return signUpRepository.findById(email);
	}
	
	
}
