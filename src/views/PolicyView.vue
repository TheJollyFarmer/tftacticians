<template>
  <VPage is-full-width>
    <div class="column is-half is-centered cookie-policy">
      <VHeader text="cookie policy"/>
      <p>
        Please read this cookie policy carefully before using TFT website
        operated by TheJollyFarmer.
      </p>
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are simple text files that are stored on your computer or mobile
        device by a website’s server. Each cookie is unique to your web browser.
        It will contain some anonymous information such as a unique identifier,
        website’s domain name, and some digits and numbers.
        What types of cookies do we use?
      </p>
      <h3>Necessary Cookies</h3>
      <p>
        Necessary cookies allow us to offer you the best possible experience
        when accessing and navigating through our website and using its
        features. For example, these cookies let us recognize that you have
        created an account and have logged into that account.
      </p>
      <h3>Functionality Cookies</h3>
      <p>
        Functionality cookies let us operate the site in accordance with the
        choices you make. For example, we will recognize your username and
        remember how you customized the site during future visits.
      </p>
      <h3>Analytical Cookies</h3>
      <p>
        These cookies enable us and third-party services to collect aggregated
        data for statistical purposes on how our visitors use the website. These
        cookies do not contain personal information such as names and email
        addresses and are used to help us improve your user experience of the
        website.
      </p>
      <h2>How to Delete Cookies?</h2>
      <p>
        If you want to restrict or block the cookies that are set by our
        website,
        you can do so through your browser setting. Alternatively, you can visit
        <a href="https://www.internetcookies.org">www.internetcookies.org</a>,
        which contains comprehensive information on how to do this on a wide
        variety of browsers and devices. You will find general information about
        cookies and details on how to delete cookies from your device.
      </p>
      <h2>Contacting Us</h2>
      <p>
        If you have any questions about this policy or our use of cookies,
        please contact us.
      </p>
    </div>
  </VPage>
</template>

<script>
import VHeader from "@/components/utility/VHeader";
import VPage from "@/components/utility/VPage";

export default {
  name: "PolicyView",

  components: { VHeader, VPage }
};
</script>

<style lang="scss" scoped>
:deep(.columns) {
  justify-content: center;

  .cookie-policy {
    text-align: justify;
    width: 50%;

    h2 {
      font-size: 1.1rem;
    }

    h3,
    a {
      font-style: italic;
    }
  }
}
</style>
