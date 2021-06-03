package com.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.entity.Student;
import com.student.repository.StudRepo;

@Service
public class StudentService {
 @Autowired
	private  StudRepo repo;
	public Student saveStudent(Student std) {
		
	Student	studentLatest =repo.findTopByOrderByIdDesc();
int studen=studentLatest.getId()+1;
	 String addmision= "R-00"+ studen;
	 
		std.setAddno(addmision);
		
		 return repo.save(std); 
		
		
		
		
	}
	public List<Student> fetchStudent() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}
}
