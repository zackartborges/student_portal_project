<template>
  <div class="home">
    <div id="student-data">
      <img src="" alt="" />
      <!-- <h1>{{student.first_name}}</h1> -->
      <h1>First Name</h1>
      <!-- <h1>{{student.last_name}}</h1> -->
      <h1>Last Name</h1>
      <!-- <h1>{{student.email}}</h1> -->
      <h3>Email</h3>
      <!-- <h1>{{student.phone}}</h1> -->
      <h3>Phone Number:</h3>
      <!-- <h1>{{student.photo}}</h1> -->
      <h3>Photo:</h3>
      <!-- <h1>{{student.bio}}</h1> -->
      <h3>Bio:</h3>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      student: {},
    };
  },
  mounted: function () {
    // axios.get
  },
  methods: {},
};
</script>
