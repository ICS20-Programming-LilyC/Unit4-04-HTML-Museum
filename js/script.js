// Copyright (c) 2022 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 04/25/2023
// This file contains the JS functions for index.html

"use strict"

// This function allows for a specific output when the user input text field is left empty.
function isEmpty(str) {
  return !str || 0 === str.length;
}

// This function determines which movie rating the user is eligible to see, given their imputed age.
function userAgeAndDaySent() {

 //initializing variables
 let cost = "Please select.";

 //declaring & defining variables
 let userAge = parseInt(document.getElementById("user-age").value);
 let dayOfTheWeek = document.getElementById("day").value;
  
  // Establishing constants for museum pass prices.
  const CHILD_FREE = 5;
  const ELDERLY_FREE = 95;
  const STUDENT_MINIMUM = 12;
  const STUDENT_MAXIMUM = 21;

  // Get the user's age from input form
  let userAgeSent = parseInt(document.getElementById("user-age").value);

  //Get the day of the week determined by 
  
  // If user enters a negative number for their age, display "Please enter a vaild age."
if (userAge < 0) {
   cost = "Please enter a valid age.";
 }
    
  // Otherwise if user does not enter age, display "Please enter age."
 else if (isEmpty(userAge)) {
   cost = "Please enter age.";
 }

  // Otherwise, if user does not enter a day of the week, display "Please enter a day of the week"
 else if (day == "Day of week") {
   cost = "Please enter a day of the week.";
 }
  
 // Using compound if statements to determine cost
 else if ((userAge < CHILD_FREE) || (userAge > ELDERLY_FREE)) {
   cost = "You can visit the museum for free!";
 }

 //Otheriwse if the user's age is between 12 and 21 and between the days Thursday and Tuesday, display "You get a student discount".
 else if (((userAge >= STUDENT_MINIMUM) && (userAge <= STUDENT_MAXIMUM)) || ((day == "Thursday") || (day == "Tuesday"))) {
   cost = "You get a student discount.";
 }

//Else, display "You are not eligible for a discount and must pay the full price."
 else {
   cost = "You are not eligible for a discount and must pay the full price.";
 }

 // Displaying the correct cost, onto the user's scree.
 document.getElementById("results").innerHTML = cost;
}