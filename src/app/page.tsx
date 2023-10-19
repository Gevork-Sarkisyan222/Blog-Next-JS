'use client';

import Post from './(components)/Post';
import { useMediaQuery } from 'react-responsive';

type postProps = {
  image: string;
  date: string;
  title: string;
  info: string;
};

const posts: postProps[] = [
  {
    image:
      'https://s3-alpha-sig.figma.com/img/2c71/d319/63450c58fe599c40a68f1bf74c09b3de?Expires=1698624000&Signature=Q1fP7E88zwrhYczjX1mARez3HyV3if99-go8t0fnS1BTx7RKB6l3Q6FmFpZtziOpXRaRPRJnrUeGyIb5iUFVMHWHTy26u7e6k-YcykLK2j8M-M5Xk9Ap0RI73OCaF6bZhKEJOywjyQ9MEeeTP4LFxgSsrwOhZytlEAUiR3Fij70LZgL-4yKoOujhSt1vPRQLx5L8kyVXGSJpa2qeSGR2aF4Jf8Tr2A~eXuhcVGJjpgTJqiDIOPqOcKfVlLLRU3Y-8zgBBa~W-ZOCX6qJD6xMIgpDCiOMxnDbeQSG9M~--5pWMU~E0zd38x71KErM~eA7s6LiMViWcv-2vy~XPKmk3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: 'Alec Whitten • 1 Jan 2023',
    title: 'Bill Walsh leadership lessons',
    info: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/908f/6e6d/adefff9c6fad99774e0aa7808b2270ab?Expires=1698624000&Signature=MlZSaBFSCCJnwXksBath1AqLaFjpgiOFSlWDZAmv3R9YHNUZepzdqlZ4oaVF~zkXKh-llTtmZ9ppFV1n6sg~IwN4qGiC~pt029sZeOReqnsvIq~Mhfw2xnb1wFfYfJ1DiubiyjRslE53GBfd~K7-pGj5a3uus-55f5-17M6b5FDKPMKLWqp3MOicHvLEwSUY08KUbshbqikDJufiOVMnmhg1sRsTSJw5YH8w~-x6R17zYW~aFzyIpAowi9lNqw6cOq1GBiDRE~QlaZSg53Gd97-gf2Bt5~6wf4auOnb9iHyBBiUGsoWaVy4mJ1T~kpxxkQiGU9llcIUW7eaGKBXkNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: 'Demi WIlkinson • 1 Jan 2023',
    title: 'PM mental models',
    info: 'Mental models are simple expressions of complex processes or relationships.',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/aa0e/63b4/b72dafa20ebf705cb3408f9d3a4343ef?Expires=1698624000&Signature=ju556McDqnIlqMOtYf4OdC5E~occAm~HVVZQMzMzpTwFXK8gtw2dg-XaHLnP4x7LQ7PjuMynsavCdNTIvO4IENmCwQ90-t4t5a6HpOa34jtYqlwD0Au4e45qdlVspQ-~CBOsbuEUtve4LozRaUlJ8ioxHurOjKQHc2DZiRsFxGe9EMUpzU7F1f7e6etqKTabRmJuBnqoUuGmnHcCRwc2Ibzs7KF8YALo0YruuGOvaxJWy4sRpA-Rh33021nc4bO7izSpBeZHUrxcrVu3eCKSJowYWwz7E1NQpmShoOFD6ioBWxjliogNb~ytfJhLxQWrCaqcVWqFLd35rYgCmoR6VA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: 'Candice Wu • 1 Jan 2023',
    title: 'What is Wireframing?',
    info: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/950f/4305/76ceafadb9f758a56d19a086f7505a80?Expires=1698624000&Signature=AkHHcW8hYbDZYadBloh8tBo4xCS2pjPifSPcU2TehPHP1sUqvUbX8PhveFQlo0Hb3IPCufQLQH-gMaRDEsfk58kNbC4GD9zPYIxqL2DNolH-vY45xANR6uPXoXBdnotOBFJo7wtpRuAl1FX9bjcTWLMKtRnVDVgEtZfj2UOviIEFISid6jAQS5Vf-1~m2rl70SA8RLLLZ-Hwu6b9G0CNJDN0QuG3pnych~6Tb1LBELH1MOotP8RkiCGFqk9WKnzxMGu8ICkt9Sx4jwPeubThaMiGyb1ILaBgaVawidHB9CpJBYuft4MQYn1CtQdA5z6bBxH6v1HXLJcIfQUwcO~UUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: 'Natali Craig • 1 Jan 2023',
    title: 'How collaboration makes us better designers',
    info: 'Collaboration can make our teams stronger, and our individual designs better.',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/1155/4089/6b913ddf85158d3f3246fba7da982400?Expires=1698624000&Signature=kmQ660zphTdDEIE6sOvs3L4cxs7E3ZebekiTBBs2WrPTzWkNNumL1sDC0o14E9XhoOnqC6A2QMxrT1334XtM6nKQWsOEugUj4bceMlsmfSec4mljVZgrXRjAMsyyJVF5T88CDOqxbRSq3pwkTf~IY~8l~KILB58l9WqEv1tcP4tqa0xX-rRaVMcfhW6KUoWkLEaa0s~K-rnh8tJZ9jfxqBiImNkfd9~av2ZB5aBm1ShZwEreNBLFvM6E1i6q4vKZsC5hQFYrK583iMgwohvFBIg61nwghXVWZ94rfG6ZUwVHbbVOPJcdFlsY4xIUnI8ysL8I~cH-75lFxnjEl0F3lA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: 'Drew Cano • 1 Jan 2023',
    title: 'Our top 10 Javascript frameworks to use',
    info: 'JavaScript frameworks make development easy with extensive features and functionalities.',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/b86d/a4b5/ab8c0e971321e0daafdbc3bc3adffb48?Expires=1698624000&Signature=gU0HsaPBkmouwxe7bPzhiM2lpntZ54PcCtS8wED3QwYG6-7g0YneAVLd1HnLSfFazVZTKz1ZBnBeH5wcO0IQbGipa~F27TQUWw90jx9tsYQoctrpZn99Df43QUX0MsAjK29HpMOgfg~BllJiK5h-ZK3pAZGd6T4xW-HiLIp2fAXxI53WQBWXGbk8VQWn1k0yPGsrAjY~UnSRIxq3VQmnvzhTRWX37PSY2GNDajHTY7se~8anIUwyHuefx~trYQ89KoQ0wlTL6qAAsne-wMrpv0rcOz41aoHtrYxzFuczecQ8TK5OaYu1Z7PDlY7fxDkFEBEW0cxknR6TZnNa2K9upA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    date: 'Orlando Diggs • 1 Jan 2023',
    title: 'Podcast: Creating a better CX Community',
    info: 'Starting a community doesn’t need to be complicated, but how do you get started?',
  },
];

export default function Home() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1800px)' });
  const conditions = isDesktop ? '54%' : '75%';

  return (
    <div className="Home-Page-Main">
      <div className="title-main">
        <hr style={{ width: conditions }} />
        <h1 className="big-title">THE BLOG</h1>
        <hr style={{ width: conditions }} />
      </div>

      <section className="blog-section">
        <div className="left-side">
          <h1 className="first-title">Recent blog posts</h1>
          <img
            className="first-image"
            src="https://s3-alpha-sig.figma.com/img/9ca4/12fa/840de131974162b09d68033e23a850b5?Expires=1698624000&Signature=ax7WzNFfaWfdN5725vY5vAqVYB9P3u4fB6vtxRN-Z9mpV580FOmaQB6OIyGrkmu3uWfEykcgUiKyrfs48BZcnMXgNpXC8c0YpyM6nK2RdjzQnRgt3SnMLx~eEUjwRMB~XFlG0XFSstnpbyUEWl-VQKOBs4QkPgcCB6PxOQjKpIlS9Ia0ROiv9okz1EJMIC8S3Zn7XYLrsY002NqcwhC1KjWWwcqGV6b~~hIUxyAhKbr4McpulLtYubzZ7wNJPkbihvyPX7eEHbHhOeDlY3WE031AV~QnVWjEVmO2xYIfm4dRCjYyJxYGI7q3QZGIR4YGMaRVp0N3eyJZCvueC8KSKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <h2>Olivia Rhye • 1 Jan 2023</h2>
          <h1>UX review presentations</h1>
          <p>
            How do you create compelling presentations that wow your colleagues and impress your
            managers?
          </p>
          <div className="btn-section">
            <button className="btn-1">Design</button>
            <button className="btn-2">Research</button>
            <button className="btn-2">Presentation</button>
          </div>
        </div>
        {/* right */}
        <div className="right-side">
          <div className="first-card">
            <img
              className="second-image"
              src="https://s3-alpha-sig.figma.com/img/0095/33dd/b18880647940253fa905f2a8d6a3a95e?Expires=1698624000&Signature=CmpFM~b3Oj0kGVntuU5OMvl0FrBXZve0aBEyT3PljJbqWzNGH1zXOM6n5j0eAq2p8dAH84rWgdEr4AH8YOg~EcWCxd2tO9gyyQMhgCniRsRmikhWMwYv9oaerZV8PfkfXKt3lGqHifS-r3Ddkk3BQg9xx6MOkZF13NTYuP3-zFxnsEnfiWRwHPdU3IDUdBYW6fXuvV90W1N2TEIZKA6xVSlpoi-3YfxwQKKtfprUIk0lKf3LB37OHEN-DU8MQlHCluWgdkXqjYgjj~5cKcQMxxz60M9ahKdeXDOLd9GPpDE5MJ0zm7D8QbKtGdcXDiEXuAI6-Zup3A8Q4L9C2bPmfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <section className="first-card-inside-text-content">
              <h2>Phoenix Baker • 1 Jan 2023</h2>
              <h1>Migrating to Linear 101</h1>
              <p>
                Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s
                how to get...
              </p>
              <div className="btn-section">
                <button className="right-btn-1">Design</button>
                <button className="right-btn-2">Research</button>
              </div>
            </section>
          </div>
          <div className="second-card">
            <img
              className="third-image"
              src="https://s3-alpha-sig.figma.com/img/c220/b565/fba3f3369a85cb9bd4d04bf17c85be21?Expires=1698624000&Signature=ZPrSgwKbnEkCpfeVBn2nD87CwUBGAwB5iTkQdZY3XyIOFeoqIWXxRP8Icf9dECUTH0b0ejCOMlBbb00SnqXwmfu8FhJGb8lqvtOl3Aq39ccsXMSO7N0TLNlAzyomNppHNRiSvYRdfZeL5i4hJoe~UjVYzqKqSgubybj-mu7MIVLLGnlOhk5FhtQGnChfsSmcmqaaIALmeH165Cr0MGgmbfFDKSoVkUuoSz0G8rYxXXNaU8MlosJqYk9BPtiU63z9~feHoTw~2O6Whh3UQn6dQyy7VPJhtRq9iPRTFQLN8uxG5OFd9-DaGJrNbwTRZEh8-~l0WjxV3NdaHn8Thg4r7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div className="second-card-inside-text-content">
              <h2>Lana Steiner • 1 Jan 2023</h2>
              <h1>Building your API Stack</h1>
              <p>
                The rise of RESTful APIs has been met by a rise in tools for creating, testing, and
                manag...
              </p>
              <div className="btn-section-right">
                <button className="right-btn-3">Design</button>
                <button className="right-btn-4">Research</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="down-container-section">
        <img
          src="https://s3-alpha-sig.figma.com/img/f074/6a8e/91047747031d3bda636eac41f4235b6d?Expires=1698624000&Signature=cxLa2GhlHmoNbLPKPUtxoz82vDKbpePbtaYsoGZk0gKcO1zJBO4pQ1oEWKsfc8EJbygMAJ~5uZ5ZHv79mLLB3pQMl9uhSFRCKAkWmXjA13GSANn4gXXponvgwz7zq--SKnMoLUy7fFwFWFK3uEIaQuxBQ3eqyajWx9ptOyzd~iHfcXnjwzM15photjDhxDOVv-gwuJcgbHj2mg-EaUVASdGQ9s19i1w9pfuygJ9emgWeQgCoUYukZmvAK4z8w1ZwOieGMOC4tfvnQdSxD4yA8dWj1sYyz-JZ5yQRMnuuf1Kn9~e50EhFp7wTCwC5HdajYsmfBi~mWBYr1AU4qF~Xjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />

        <div className="down-text-content">
          <h2>Olivia Rhye • 1 Jan 2023</h2>
          <h1>Grid system for better Design User Interface</h1>
          <p>
            A grid system is a design tool used to arrange content on a webpage. It is a series of
            vertical and horizontal lines that create a matrix of intersecting points, which can be
            used to align and organize page elements. Grid systems are used to create a consistent
            look and feel across a website, and can help to make the layout more visually appealing
            and easier to navigate.
          </p>
          <div className="buttons-content">
            <button className="button-1">Design</button>
            <button className="button-2">Interface</button>
          </div>
        </div>
      </section>
      <div className="post-container">
        <h1 className="post-title">All blog posts</h1>

        <section className="post-section">
          {posts.map((obj, index) => (
            <Post key={index} image={obj.image} date={obj.date} title={obj.title} info={obj.info} />
          ))}
        </section>
      </div>
    </div>
  );
}
