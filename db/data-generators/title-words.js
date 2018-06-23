const text = `mumblecore migas semiotics
  shabby-chic sustainable art-party blue-bottle ugh health goth activated-charcoal
  listicle paleo helvetica lomo scenester echo-park put-a-bird-on-it salvia
  dreamcatcher neutra gochujang normcore helvetica XOXO chambray roof-party hoodie squid
  porkbelly polaroid vaporware actually heirloom wayfarers beard four-dollar-toast
  seitan cray authentic direct trade iPhone austin snackwave irony squid cliche scenester
  next-level typewriter ethical authentic single-origin coffee meditation enamel pin 90s bespoke
  umami selfies tattooed prism ugh chambray activated charcoal vinyl gastropub cray chillwave
  authentic shabby chic af taiyaki vape next-level gochujang street art hammock kombucha swag
  unicorn organic shaman humblebrag lo-fi tile bushwick gentrify live-edge XOXO umami chillwave
  kogi freegan shoreditch etsy whatever bushwick ramps mixtape post-ironic williamsburg sartorial
  adaptogen etsy gentrify tattooed chambray`;
const titleWords = text.replace(/\n/g, '').replace('  ', '').split(' ');

module.exports = titleWords.filter(word => word !== '');