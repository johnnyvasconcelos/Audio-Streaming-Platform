import React from 'react'
const Plans = () => {
  return (
    <>
    <div className="container space-page">
      <h1>Choose the Perfect Plan for Your Needs!</h1>
    </div>
      <section className="plans space-page">
        <div className="container flex">
        <article className="card">
            <h2>$0<span>/mo</span></h2>
            <p className="title">Free Plan</p>
            <p className="description">Basic access to our music library with ads.</p>
            <ul className="column">
                <li>&#10003; Access to basic library</li>
                <li>&#10003; Ads included</li>
                <li>&#10003; Limited skips</li>
            </ul>
            <button>Get Started</button>
        </article>
        <article className="card popular">
          <span className="string">most popular</span>
            <h2>$9.99<span>/mo</span></h2>
            <p className="title">Plus Plan</p>
            <p className="description">Enjoy ad-free music and offline playback.</p>
            <ul className="column">
                <li>&#10003; Ad-free experience</li>
                <li>&#10003; Unlimited skips</li>
                <li>&#10003; Offline playback</li>
            </ul>
            <button>Subscribe</button>
        </article>
        <article className="card">
            <h2>$14.99<span>/mo</span></h2>
            <p className="title">Premium Plan</p>
            <p className="description">All premium features plus family sharing.</p>
            <ul className="column">
                <li>&#10003; All premium features</li>
                <li>&#10003; Family sharing (up to 5 users)</li>
                <li>&#10003; Exclusive content</li>
            </ul>
            <button>Subscribe</button>
        </article>
        </div>
      </section>
      <section className="plans__text space-page">
  <div className="container">
    <h2>Find the Right Plan for You</h2>
    <p>Our audio streaming platform offers a variety of plans designed to fit different listening needs and preferences. Whether you’re new to music streaming or already a dedicated fan, we have something for everyone. Each plan is designed to provide a unique experience, from basic access to premium features, so you can enjoy your music the way you want.</p>

    <h2>Free Plan</h2>
    <p>The Free Plan gives you basic access to our vast music library. It's a great way to start exploring the platform without any financial commitment. While you will experience ads, this plan still offers a wide variety of tracks and artists for you to enjoy. It’s perfect if you just want to listen casually, and it allows you to get a feel for everything we offer before considering an upgrade.</p>

    <h2>Plus Plan</h2>
    <p>For those who want a more seamless and enjoyable experience, the Plus Plan is a step up. This plan removes all ads, providing an uninterrupted listening experience. Plus, you gain access to offline playback, so you can take your music with you, even when you're not connected to the internet. The Plus Plan is popular among users who want to listen to music without distractions and enjoy the convenience of offline listening.</p>

    <h2>Premium Plan</h2>
    <p>If you want the ultimate music experience, the Premium Plan is the perfect choice. This plan includes everything the Plus Plan offers but with added benefits. It allows you to share your subscription with up to five family members, making it a great option for households. You’ll also get exclusive content, giving you access to special tracks and features that are not available with other plans. This is the best option for those who want the full experience and are looking for more than just the basics.</p>

    <p>No matter what plan you choose, we’re committed to providing a great music experience tailored to your needs. Whether you're here to casually listen or dive deep into exclusive content, we have a plan for you. Get started today and enjoy your favorite tunes anytime, anywhere.</p>
  </div>
</section>

    </>
  )
}
export default Plans