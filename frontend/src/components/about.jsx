import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 py-12 pb-0 mb-0">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 md:px-12 text-center">
        <h1 className="text-5xl font-bold mb-6">Biography</h1>
        <div className="flex flex-col items-center">
          <img
            src="frank.png"
            alt="Author"
            className="rounded-full w-28 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 border-2 mb-2 mx-auto "

          />
          <p className="text-white font-semibold">Frank Helton</p>
        </div>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto">
        Frank has a master’s degree in Counselor Education.  He’s been a speaker, trainer, and seminar presenter in the United States and abroad. His presentations focused on management, leadership skills, and related topics.  He consistently received high praise for his training presentations.  
        As an employee assistance professional for a large corporation, Frank helped individuals find resolutions to behavioral and performance issues in their personal and workplace lives.
        His community service included being a former Advisory Board Member for Faith House Domestic Violence Center and over 10 years in the Arizona Rangers Law Enforcement Auxiliary. He was also a former president of a community anti-substance abuse organization.
        Frank and his wife, Alice, married each other twice. It’s possible they were the only ones who could put up with each other. 
        Frank enjoys riding his mountain bike, collecting cufflinks, and trying to satisfy a curiosity about ‘why we’re here’.
        Early in life, Frank had no specific recollection of a particular life’s calling. Wanting to do so many different things. he hoped to use any abilities he had for noble causes. Sometimes, however, because of alcohol, he missed the mark. Sober now, for a long time, he strives to live a life more principled. 

        </p>
        <a
          href="#about"
          className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
        >
          Learn More
        </a>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-6 md:px-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
          About Us
        </h2>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
          Frank was drafted into the U. S. Army after receiving his undergraduate degree. He served at Fort Knox, Kentucky as a Classification-Interviewer at the Reception Station. This was an experience that was invaluable and helped shape some of his future perceptions. 
          After the service, Frank returned to his alma mater, Emporia State University (Kansas), and eventually attained a Master of Science in Counselor Education.
          Frank has had numerous work experiences, also known as jobs, throughout his life. At one time, it troubled him that he’d never settled into one of life’s work streams. However, looking back, he realizes he probably was on the right path after all. The knowledge and wisdom of others he has accumulated have served him in other meaningful ways. 
          Professionally, the most gratifying was conducting training and seminars nationally and internationally. Helping others handle working relationships enjoyably and productively. This appeared to be, as Joseph Campbell called it, his bliss. This, he thought, would be his long-last calling.
          Then, an unexpected experience came into his life. Frank became a caregiver to an elderly uncle for six years. That wasn’t planned but turned out to be intrinsically rewarding. Such a situation can reveal a lot about yourself to yourself.
          But, even then, nagging him often was an inner voice telling him to write. A late friend and somewhat accomplished author once told him, “If you’re doing something, anything, and you feel guilty because you’re not writing, then you’re supposed to be writing.”  Now, he writes to fill that ever-present voice before it fades to a whisper and then silence. And—to avoid the sentiment of a line quoted in Frank’s book Wisdom of the Big and Little Screens--“Old age is when regrets replace dreams.”
          Frank’s mission is to share some of the thoughts and possibly wisdom he’s accumulated, both from others and his own experiences. 

          </p>
        </div>
      </section>

      {/* Frank Helton Section */}
      <section id="frank-helton" className="bg-gray-100 py-16 px-6 md:px-12">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          Frank Helton Philosophy
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Like many, I believe in the basic values that make people civilized, like fairness, honesty, loyalty, and kindness.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
          To me, fairness encompasses most other values. Being fair is working for win-win outcomes. Being fair is about being just or seeking justice. Being fair is about not taking undue advantage of another. Fairness is linked to virtually all positive values.

          I believe in being honest with yourself, as well as others. However, a person can value honesty but not practice honesty. A person may value you being honest with them, but may not necessarily believe in practicing honesty with you and others.  Honesty is linked to trustworthiness.

          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Like most, I believe loyalty means standing by someone when times are good, and when times are challenging. Being present for someone in every way. 
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Naturally, let's be kind to others whenever possible. The best kindnesses are those we expect no reward for and that others are unaware of—including the recipient. 
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-yellow-500 text-blue-900 py-20 px-6 md:px-12 text-center">
        <h2 className="text-4xl font-semibold mb-6">Questions for Frank</h2>
        <p className="text-2xl">
        Did you enjoy school?
        </p>
        <br></br>
        <p className='text-lg'>
        “Which one?”, he said with a laugh. <br></br>
        
         My father’s work took us to many places. I found grade cards for 17 schools between the 1st and 5th grades. I don’t recall where I was in 6th grade. Three junior high schools. One high school.<br></br><br></br>
         Once, when in graduate school, I was told that if my family had stayed in one place long enough, I might have been tested by a school psychologist. (Not sure school psychologists were around, then.) It was likely I would have been labeled LD, learning disabled. Like that would’ve helped me? I might still be in therapy. <br></br> <br></br>
         There were times when school was enjoyable. My reading ability didn’t develop like it probably should. I still subvocalize when reading. <br></br><br></br>
         Much of my education was from the many places we lived. Seeing things many of my peers might never get to see.<br></br><br></br>
         I guess it’s a mixed bag. But that can be a good thing.

        </p>
        <br></br>
        <p className="text-2xl">
        Where do you get inspiration?
        </p>
        
        <p className='text-lg'>
        Probably, from some things that used to show up on my early grade cards: “Nice child; makes friends easily; doesn’t pay attention, doesn’t follow directions; daydreams too much”. It’s okay to be in your private little world—but let others in sometimes.
        </p>
        <br></br>
        <p className="text-2xl">
            
          Who are your favorite authors?

        </p>
       
        <p className='text-lg'>
        So many. Viktor Frankl, Pat Conroy, Malcolm Gladwell, and Somerset Maugham for starters.
        </p>
        <br></br>
        <p className="text-2xl">
        What’s your favorite nature sound?
        </p>
        
        <p className='text-lg'>
        Ever been in a quiet forest, and all you can hear is the wind in the trees? Get’s me every time.
        </p>
        <br></br>
        <h3 className='text-2xl'>
         <b>Do you have a question for Frank? You can send your question in the Contact section. Click here.</b>
        </h3>
        <br></br><br></br>
        <a
          href="/contact"
          className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
