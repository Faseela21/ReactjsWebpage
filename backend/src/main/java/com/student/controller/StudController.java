package com.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.student.entity.Student;
import com.student.service.StudentService;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class StudController {

	@Autowired
	private StudentService studservice;

	@GetMapping("fetch")
	@CrossOrigin
	
	public List<Student> getStudentDetailse() {

		return studservice.fetchStudent() ;
	}

	@PostMapping("insert")
	@CrossOrigin
	public Student insertStudent(@RequestBody Student stu) {

		return studservice.saveStudent(stu);
	}

}
