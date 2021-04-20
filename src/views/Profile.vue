<template>
  <div class="home">
    <div id="student-data">
      <!-- v-for/v-bind image link {{student.photo}}-->
      <img src="" alt="" />
      <!-- <h1>{{student.first_name}}</h1> -->
      <h3>First Name</h3>
      <!-- <h3>{{student.last_name}}</h3> -->
      <h3>Last Name</h3>
      <!-- <p>{{student.email}}</p> -->
      <p>Email</p>
      <!-- <p>{{student.phone}}</p> -->
      <p>Phone Number:</p>
      <!-- <p>{{student.photo}}</p> -->
      <p>Photo:</p>
      <!-- <p>{{student.bio}}</p> -->
      <p>Bio:</p>
      <!-- <p>{{student.linkedin_url}}</p> -->
      <p>Linkedin URL:</p>
      <!-- <p>{{student.twitter_handle}}</p> -->
      <p>Twitter:</p>
      <!-- <p>{{student.website_url}}</p> -->
      <p>Website:</p>
      <!-- <p>{{student.resume_url}}</p> -->
      <p>Resume:</p>
      <!-- <p>{{student.github_url}}</p> -->
      <p>Github:</p>
      <!-- <p>{{student.bio}}</p> -->
      <button>Edit</button>
      <dialog id="student-details">
        <form method="dialog"></form>
      </dialog>
    </div>
    <div id="student-experiences"></div>
    <div id="student-education"></div>
    <div id="student-skills"></div>
    <div id="student-capstone"></div>
  </div>
</template>

<style></style>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      student: {},
      // each variable above will need data here!
    };
  },
  mounted: function () {
    // axios.get
  },
  methods: {
    // updateStudent: function (student) {
    //   let params = {
    //     first_name: student.first_name,
    //     last_name: student.last_name,
    //     email: student.email,
    //     phone: student.phone,
    //     bio: student.bio,
    //     linkedin_url: student.linkedin_url,
    //     twitter_handle: student.twitter_handle,
    //     website_url: student.website_url,
    //     resume_url: student.resume_url,
    //     github_url: student.github_url,
    //     photo: student.photo,
    //   };
    //   axios.patch("/api/students" + student.id, params).then((response) => {
    //     console.log("Success!", response.data);
    //   });
    // },
  },
};
</script>
