var SEASON_COPY = {
  spring: { heading: 'Spring cleanups are booking now.', body: 'Winter leaves a mess. Our crews clear the beds, haul the debris and get your property ready before the season really starts.', cta: 'Get on the spring list' },
  summer: { heading: 'Mulch season is here.', body: 'Fresh mulch, clean edges, and beds that look sharp all summer — plus weekly mowing with lines you can see from the road.', cta: 'Request mulch pricing' },
  fall:   { heading: 'Fall cleanups and trims.', body: 'Leaf removal, precision shrub trims and winterising, so spring starts easier. Fall planters and mums go in at the same visit.', cta: 'Book fall service' },
  winter: { heading: 'Snow contracts close soon.', body: 'Our winter routes fill up. Reserve your spot before the first storm — and ask about holiday lighting while we are out there.', cta: 'Reserve snow service' }
};
function setSeason(name) {
  var c = SEASON_COPY[name]; if (!c) return;
  document.getElementById('season-heading').textContent = c.heading;
  document.getElementById('season-body').textContent = c.body;
  document.getElementById('season-cta').textContent = c.cta;
  document.querySelectorAll('.season-btn').forEach(function (b) {
    var on = b.getAttribute('data-season') === name;
    b.style.background = on ? '#C00025' : '#FFFFFF';
    b.style.color = on ? '#F2EDE4' : '#3A2E24';
  });
}
function sendRequest(form) {
  var f = form.elements;
  var body = ['Name: ' + f.name.value, 'Phone: ' + f.phone.value, 'Email: ' + f.email.value, 'Property: ' + f.address.value, 'Service: ' + f.service.value, '', f.message.value].join('\n');
  window.location.href = 'mailto:ryanslandscaping@hotmail.com?subject=' + encodeURIComponent('Estimate request — ' + (f.name.value || 'new inquiry')) + '&body=' + encodeURIComponent(body);
  var n = document.getElementById('sent-note'); if (n) n.style.display = 'inline';
  return false;
}
