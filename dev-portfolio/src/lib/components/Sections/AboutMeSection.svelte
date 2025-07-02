<script lang="ts">
  import image from "$assets/about-me.jpg";
  import { Button, SectionHeadline, ExperienceTable } from "$components";
  import { goto } from "$app/navigation";

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="about-me mt-l">
  <SectionHeadline sectionName="about-me">About Me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <img class="image" src={image} alt="" />
    <div class="text">
      <p>
        Hi, I’m Nick! I’m a Svelte enthusiast and Business Transformation
        Consultant at IBM, where I help public health agencies make smarter
        decisions using better data. I’m based in Buffalo, NY, and my work sits
        at the intersection of technology, analytics, and strategy—think
        building scalable data pipelines, modernizing infrastructure, and
        translating messy datasets into something meaningful. If there’s a
        process that can be automated or a workflow that can be optimized, I’m
        probably already sketching out how to do it.
      </p>
      <p>
        My proudest work has been with the Rhode Island Department of Health,
        where I contributed in COVID-19 analytics across multiple workstreams,
        built tools to detect asymptomatic cases from wastewater trends, and
        helped craft a forward-looking roadmap for data modernization. I’ve also
        engineered everything from scheduling apps to entity resolution systems,
        and I’m always looking for ways to make data more accessible, accurate,
        and impactful. I thrive in collaborative environments where we can dig
        into challenges and build something better together.
      </p>
      <p>
        Outside of work, I’m a firm believer in giving back—whether that’s
        leading the IBM Buffalo Charity Golf Tournament or mentoring colleagues
        who are just getting started in tech. I studied computer science at the
        University at Buffalo and have picked up a bunch of certifications along
        the way in AWS, IBM Consulting, and healthcare data solutions. Whether
        it’s public health, cloud systems, or just a really complex Excel
        problem, I love rolling up my sleeves and diving in.
      </p>
      <Button className="mt-m" {onclick}>Tell me about your project</Button>
    </div>
  </div>
  <ExperienceTable />
</section>

<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .image {
    width: 42%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }
</style>
