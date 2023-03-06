package com.project.netflixClone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.project.netflixClone.model.SignUp;

@Repository
@EnableJpaRepositories
public interface SignUpRepository extends JpaRepository<SignUp , String>
{

	
	

}
