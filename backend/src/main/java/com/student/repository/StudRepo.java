package com.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.entity.Student;

public interface StudRepo extends JpaRepository<Student, Integer> {

 public	Student findTopByOrderByIdDesc();

}
