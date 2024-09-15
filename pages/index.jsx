import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { DOMAIN, MANGA_NAME, MANGA_DESCRIPTION, MANGA_AUTHOR, MANGA_RELEASE, MANGA_STATUS, MANGA_ARTIST, MANGA_STUDIO, MANGA_GENRE, APP_DESCRIPTION, APP_NAME, MANGA_SUMMARY, COVER_IMG, AUTHOR_PAGE, LOGO_URL, URL_PREFIX, chaptersData, BEHIND_COVER_IMG, RelatedMangaLinks, DOMAIN_NAME } from "@/config";
import Head from "next/head";

export default function Home() {

  const sortedChapters = chaptersData.sort((a, b) => {
    const aParts = a.chapterNumber.match(/(\d+)([a-z]*)/);
    const bParts = b.chapterNumber.match(/(\d+)([a-z]*)/);
    const aNumber = parseInt(aParts[1], 10);
    const bNumber = parseInt(bParts[1], 10);

    if (aNumber === bNumber) {
      return aParts[2].localeCompare(bParts[2]);
    }
    return aNumber - bNumber;
  }).reverse();


  const chapters = sortedChapters.map((chapter) => ({
    number: chapter.chapterNumber,
    url: `${DOMAIN}/${URL_PREFIX}-${chapter.chapterNumber}`
  }));


  const genres = MANGA_GENRE.split(', ');


  const schema00 =
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${DOMAIN}`
    },
    "headline": `${MANGA_NAME} Manga`,
    "description": `${APP_DESCRIPTION}`,
    "image": `${COVER_IMG}`,
    "author": {
      "@type": "Person",
      "name": `${MANGA_NAME} Team`,
      "url": `${AUTHOR_PAGE}`
    },
    "publisher": {
      "@type": "Person",
      "name": `${APP_NAME}`,
      "logo": {
        "@type": "ImageObject",
        "url": `${LOGO_URL}`
      }
    },
  }


  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${DOMAIN}`,
        "url": `${DOMAIN}`,
        "name": `Read ${MANGA_NAME} manga Online in a very high quality on our website`,
        "isPartOf": {
          "@id": `${DOMAIN}/#website`
        },
        "about": {
          "@id": `${DOMAIN}/#organization`
        },
        "primaryImageOfPage": {
          "@id": `${DOMAIN}/#primaryimage`
        },
        "image": {
          "@id": `${DOMAIN}/#primaryimage`
        },
        "thumbnailUrl": `${COVER_IMG}`,
        "description": `Read ${MANGA_NAME} Manga Online at ${DOMAIN_NAME} which is the best website for reading manga online in very high quality.`,
        "breadcrumb": {
          "@id": `${DOMAIN}/#breadcrumb`
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [`${DOMAIN}`]
          }
        ]
      },
      {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": `${DOMAIN}/#primaryimage`,
        "url": `${COVER_IMG}`,
        "contentUrl": `${COVER_IMG}`,
        "width": 1280,
        "height": 720,
        "caption": `${MANGA_NAME} high Quality cover Image`
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${DOMAIN}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        "url": `${DOMAIN}`,
        "name": "My Blog",
        "description": `Read ${MANGA_NAME} manga Online at ${DOMAIN_NAME} which is the best website for reading manga online in very high quality.`,
        "publisher": {
          "@id": `${DOMAIN}/#organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${DOMAIN}/search/{search_term_string}`,
            },
            "query-input": {
              "@type": "PropertyValueSpecification",
              "valueRequired": true,
              "valueName": "search_term_string"
            }
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": `${DOMAIN}/#organization`,
        "name": "My Blog",
        "url": `${DOMAIN}`,
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": `${DOMAIN}/#logo`,
          "url": `${LOGO_URL}`,
          "contentUrl": `${LOGO_URL}`,
          "width": 476,
          "height": 480,
          "caption": "My Blog"
        },
        "image": {
          "@id": `${DOMAIN}/#logo`
        }
      }
    ]
  };





  const head = () => (
    <Head>
      <title>{`Read ${MANGA_NAME} Manga Online`}</title>
      <meta name="description" content={APP_DESCRIPTION} />
      <link rel="canonical" href={`${DOMAIN}`} />
      <meta property="og:title" content={`Read ${MANGA_NAME} Manga Online`} />
      <meta property="og:description" content={APP_DESCRIPTION} />
      <meta property="og:type" content="webiste" />
      <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <meta property="og:url" content={`${DOMAIN}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />
      <meta property="og:image" content={`${COVER_IMG}`} />
      <meta property="og:image:secure_url" content={`${COVER_IMG}`} />
      <meta property="og:image:type" content="image/jpg" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head >
  );

  // const filteredMangaLinks = RelatedMangaLinks.filter(item => item.link !== DOMAIN);


  const handleRedirect = () => {
    window.open('https://thampolsi.com/4/7457654', '_blank');
  };

  return (
    <>
      {head()}
      <Navbar />
      <article>

        <div className="md:flex md:mb-[60px] mb-5 pt-3 relative bg-[black]">
          {/* <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${BEHIND_COVER_IMG})`, opacity: '0.25' }}></div> */}

          <div className="pt-3 md:w-2/5">
            <img className="mx-auto md:mx-0" width={450} height={450} src={`${COVER_IMG}`} alt="Manga Cover" />
          </div>

          <div className="md:w-3/5 md:mr-10  text-white p-5 relative z-10">
            <h1 className="text-center font-extrabold text-4xl my-5 uppercase">{MANGA_NAME}</h1>
            <p className="my-5 leading-[2] px-6 text-center" dangerouslySetInnerHTML={{ __html: MANGA_DESCRIPTION }} />

            <div className="flex flex-wrap justify-center gap-2 px-4">
              {genres.map((genre, index) => (
                <button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {genre}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 grid-cols-2 justify-center gap-x-10 mt-5 px-3">

              <div className="text-center mt-10">
                <h3 className="font-bold text-[21px] mb-2">Artist</h3>
                <p>{MANGA_ARTIST}</p>
              </div>
              <div className="text-center mt-10">
                <h3 className="font-bold text-[21px] mb-2">Release</h3>
                <p>{MANGA_RELEASE}</p>
              </div>
              <div className="text-center mt-10">
                <h3 className="font-bold text-[21px] mb-2">Author</h3>
                <p>{MANGA_AUTHOR}</p>
              </div>
            </div>

            {/* <div className="flex justify-center mt-10 pb-5">
              <button className="bg-blue-500 hover:scale-110 active:scale-95 transition-transform text-white font-bold py-2 px-4 rounded">
                <a href="#readmanga">READ NOW</a>
              </button>
            </div> */}
          </div>
        </div>





        <h2 id="readmanga" className="font-extrabold text-3xl my-10 px-4 text-center">
          <Link href={DOMAIN} className="hover:underline">{`Read ${MANGA_NAME} Manga Online`}</Link>
        </h2>

        <div className="mt-10 max-w-[1100px] mb-10 mx-auto px-5 flex flex-wrap justify-center">

          {chapters.map((chapter) => (
            <div className="flex hover:scale-105 active:scale-95 transition-transform" key={chapter.number}>
              <a
                onClick={handleRedirect}
                href={chapter.url} className="p-5 hover:underline">
                <p className="w-[300px] text-center p-5 border border-l-8 border-[black] font-bold break-words">
                  {`${MANGA_NAME}, Chapter ${chapter.number}`}
                </p>
              </a>
            </div>
          ))}

        </div>





        <div className="bg-[black] relative">
          <div className="absolute inset-0 bg-black opacity-80"></div> {/* Dark overlay */}
          <div className="pt-10 pb-10 max-w-[1100px] mx-auto px-5 text-[white] relative z-10">
            <h2 className="text-center font-extrabold text-3xl">{`More About ${MANGA_NAME} Manga`}</h2>
            {MANGA_SUMMARY.map(paragraph => (
              <p className="py-7 leading-[2]" key={paragraph.id}>{paragraph.content}</p>
            ))}
          </div>
        </div>
      </article >
      <Footer />
    </>
  );
}
