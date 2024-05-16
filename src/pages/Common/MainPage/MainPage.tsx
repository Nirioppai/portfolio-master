import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function MainPage() {
  return (
    <>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Grid container justifyContent='center'>
          <Grid item xs={4}>
            <Grid
              container
              rowSpacing={1}
              sx={{ position: 'sticky', top: 350 }}
            >
              <Grid item xs={12}>
                <Typography
                  component='h1'
                  sx={{
                    color: 'text.primary',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                  }}
                >
                  <Link href='/' color='inherit' underline='none'>
                    Nico C. Del Rosario
                  </Link>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant='h2'
                  sx={{
                    mt: 2,
                    color: 'text.primary',
                    fontSize: '1.25rem',
                    fontWeight: 'medium',
                  }}
                >
                  Web Developer & Automation Test Engineer
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography paragraph sx={{ mt: 2, maxWidth: 'xs' }}>
                  test test test test
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <ul>
                  <li>
                    <Link
                      href='#about'
                      sx={{ display: 'flex', alignItems: 'center', py: 1 }}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#experience'
                      sx={{ display: 'flex', alignItems: 'center', py: 1 }}
                    >
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#projects'
                      sx={{ display: 'flex', alignItems: 'center', py: 1 }}
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography paragraph>
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an advertising agency, a start-up, a huge
              corporation, and a digital product studio.
            </Typography>

            <Grid item xs={4}>
              <ol className='group/list'>
                <li className='mb-12'>
                  <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <header
                      className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                      aria-label='2024 to Present'
                    >
                      2024 — Present
                    </header>
                    <div className='z-10 sm:col-span-6'>
                      <h3 className='font-medium leading-snug text-slate-200'>
                        <div>
                          <a
                            className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                            href='https://www.klaviyo.com'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)'
                          >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                              Senior Frontend Engineer, Accessibility ·
                              <span className='inline-block'>Klaviyo</span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className='mt-2 text-sm leading-normal'>
                        Build and maintain critical components used to construct
                        Klaviyo’s frontend, across the whole product. Work
                        closely with cross-functional teams, including
                        developers, designers, and product managers, to
                        implement and advocate for best practices in web
                        accessibility.
                      </p>
                      <ul
                        className='mt-2 flex flex-wrap'
                        aria-label='Technologies used'
                      >
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            JavaScript
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            TypeScript
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            React
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            Storybook
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='mb-12'>
                  <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <header
                      className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                      aria-label='2018 to 2024'
                    >
                      2018 — 2024
                    </header>
                    <div className='z-10 sm:col-span-6'>
                      <h3 className='font-medium leading-snug text-slate-200'>
                        <div>
                          <a
                            className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                            href='https://upstatement.com'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='Lead Engineer at Upstatement (opens in a new tab)'
                          >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                              Lead Engineer ·
                              <span className='inline-block'>Upstatement</span>
                            </span>
                          </a>
                        </div>
                        <div>
                          <div className='text-slate-500' aria-hidden='true'>
                            Senior Engineer
                          </div>
                        </div>
                        <div>
                          <div className='text-slate-500' aria-hidden='true'>
                            Engineer
                          </div>
                        </div>
                      </h3>
                      <p className='mt-2 text-sm leading-normal'>
                        Build, style, and ship high-quality websites, design
                        systems, mobile apps, and digital experiences for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more. Provide leadership within engineering
                        department through close collaboration, knowledge
                        shares, and spearheading the development of internal
                        tools.
                      </p>
                      <ul
                        className='mt-2 flex flex-wrap'
                        aria-label='Technologies used'
                      >
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            JavaScript
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            TypeScript
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            HTML &amp; SCSS
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            React
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            Next.js
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            React Native
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            WordPress
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            Contentful
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            Node.js
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            PHP
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='mb-12'>
                  <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <header
                      className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                      aria-label='July to December 2017'
                    >
                      July — Dec 2017
                    </header>
                    <div className='z-10 sm:col-span-6'>
                      <h3 className='font-medium leading-snug text-slate-200'>
                        <div>
                          <a
                            className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                            href='https://www.apple.com/apple-music/'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='UI Engineer Co-op at Apple (opens in a new tab)'
                          >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                              UI Engineer Co-op ·
                              <span className='inline-block'>Apple</span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className='mt-2 text-sm leading-normal'>
                        Developed and styled interactive web apps for Apple
                        Music, including the user interface of Apple Music’s
                        embeddable web player widget for in-browser user
                        authorization and full song playback.
                      </p>
                      <ul
                        className='mt-2 flex flex-wrap'
                        aria-label='Related links'
                      >
                        <li className='mr-4'>
                          <a
                            className='relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300'
                            href='https://developer.apple.com/documentation/musickitjs'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='MusicKit.js (opens in a new tab)'
                          >
                            <span>MusicKit.js</span>
                          </a>
                        </li>
                        <li className='mr-4'>
                          <a
                            className='relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300'
                            href='https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='9to5Mac (opens in a new tab)'
                          >
                            <span>9to5Mac</span>
                          </a>
                        </li>
                        <li className='mr-4'>
                          <a
                            className='relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300'
                            href='https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='The Verge (opens in a new tab)'
                          >
                            <span>The Verge</span>
                          </a>
                        </li>
                      </ul>
                      <ul
                        className='mt-2 flex flex-wrap'
                        aria-label='Technologies used'
                      >
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            Ember
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            SCSS
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            JavaScript
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            MusicKit.js
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='mb-12'>
                  <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <header
                      className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                      aria-label='2016 to 2017'
                    >
                      2016 — 2017
                    </header>
                    <div className='z-10 sm:col-span-6'>
                      <h3 className='font-medium leading-snug text-slate-200'>
                        <div>
                          <a
                            className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                            href='https://scout.camd.northeastern.edu/'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='Developer at Scout Studio (opens in a new tab)'
                          >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                              Developer · Scout
                              <span className='inline-block'>Studio</span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className='mt-2 text-sm leading-normal'>
                        Collaborated with other student designers and engineers
                        on pro-bono projects to create new brands, design
                        systems, and websites for organizations in the
                        community.
                      </p>
                      <ul
                        className='mt-2 flex flex-wrap'
                        aria-label='Technologies used'
                      >
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            Jekyll
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            SCSS
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            JavaScript
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            WordPress
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='mb-12'>
                  <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <header
                      className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                      aria-label='July to December 2016'
                    >
                      July — Dec 2016
                    </header>
                    <div className='z-10 sm:col-span-6'>
                      <h3 className='font-medium leading-snug text-slate-200'>
                        <div>
                          <a
                            className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                            href='https://starry.com/'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='Software Engineer Co-op at Starry (opens in a new tab)'
                          >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                              Software Engineer Co-op ·
                              <span className='inline-block'>Starry</span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className='mt-2 text-sm leading-normal'>
                        Worked with the UI team to engineer and improve major
                        features of Starry’s customer-facing Android app.
                      </p>
                      <ul
                        className='mt-2 flex flex-wrap'
                        aria-label='Related links'
                      >
                        <li className='mr-4'>
                          <a
                            className='relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300'
                            href='https://play.google.com/store/apps/details?id=com.starry.management&amp;hl=en_US&amp;gl=US'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='Android App (opens in a new tab)'
                          >
                            <span>Android App</span>
                          </a>
                        </li>
                        <li className='mr-4'>
                          <a
                            className='relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300'
                            href='https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='ScreenTime 2.0 (opens in a new tab)'
                          >
                            <span>ScreenTime 2.0</span>
                          </a>
                        </li>
                      </ul>
                      <ul
                        className='mt-2 flex flex-wrap'
                        aria-label='Technologies used'
                      >
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            Cordova
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            Backbone
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            JavaScript
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            CSS
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='mb-12'>
                  <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <header
                      className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                      aria-label='July to December 2015'
                    >
                      July — Dec 2015
                    </header>
                    <div className='z-10 sm:col-span-6'>
                      <h3 className='font-medium leading-snug text-slate-200'>
                        <div>
                          <a
                            className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
                            href='https://us.mullenlowe.com/'
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label='Creative Technologist Co-op at MullenLowe U.S. (opens in a new tab)'
                          >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                              Creative Technologist Co-op · MullenLowe
                              <span className='inline-block'>U.S.</span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className='mt-2 text-sm leading-normal'>
                        Developed, maintained, and shipped production code for
                        client websites. Clients included JetBlue, Lovesac, U.S.
                        Cellular, U.S. Department of Defense, and more.
                      </p>
                      <ul
                        className='mt-2 flex flex-wrap'
                        aria-label='Technologies used'
                      >
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            HTML
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            CSS
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            JavaScript
                          </div>
                        </li>
                        <li className='mr-1.5 mt-2'>
                          <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                            jQuery
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </Grid>
          </Grid>

          {/* New Content */}
        </Grid>
      </Box>
    </>
  );
}

export default MainPage;
