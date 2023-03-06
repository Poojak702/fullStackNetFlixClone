package com.project.netflixClone.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.netflixClone.model.SignUp;
import com.project.netflixClone.service.SignUpService;

@CrossOrigin(origins = "*", allowedHeaders = "*") 
@RestController
public class SignUpController 
{

	@Autowired
	SignUpService signUpService;
	
	
	@GetMapping("/get")
	public String home()
	{
		return "Rest ApI";
	}
	
	@PostMapping("/signup")
	@ResponseBody()
	@CrossOrigin(origins = "http://localhost:4200/signup") 
	public int createUser(@RequestBody SignUp user)
	{
		System.out.println("controller class"+user.getEmail());
		
		 return signUpService.createUser(user);
		 
	}
	
	@GetMapping("/login/{email}")
	@CrossOrigin(origins = "http://localhost:4200/login")
	public Optional<SignUp> login(@PathVariable("email")String email)
	{
		return signUpService.login(email);
	}
	
	
}
