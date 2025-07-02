<script>
  import authorPic from "$assets/profile_pic.jpg";
</script>

<section class="landing-page-section">
  <h2 class="mb-l">About the Author</h2>
  <div class="author-container">
    <div class="author-text">
      <p class="mb-xs">
        Business Transformation Consultant based in the Buffalo CIC,
        specializing in data engineering, analytics, and science. Skilled in
        Python, SAS, AWS, ETL design, and automated reporting.
      </p>
      <p>
        Experienced in enhancing data infrastructure, interoperability, and
        supporting decision-making for state public health agencies. Adept at
        translating complex data into actionable strategies and fostering cross-
        team collaboration. Committed to delivering high-impact solutions that
        drive efficiency and informed decision-making.
      </p>
    </div>
    <img src={authorPic} alt="Author Nicholas Cumbo" />
  </div>
</section>

<style>
  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }
</style>
