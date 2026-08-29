export function MapEmbed() {
  return (
    <div className="w-full aspect-[16/9] border border-warm-300 bg-warm-100 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4997000666017!2d55.257593275381495!3d25.18636557771797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x628316c7bf9404cd%3A0x6e079c9212bad04e!2sVisage%20Polyclinic%20Dubai.!5e0!3m2!1sen!2sin!4v1787978686226!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Visage Polyclinic Dubai Location on Google Maps"
      ></iframe>
    </div>
  );
}
