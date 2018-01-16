let Twit = require('twit')

let T = new Twit({
    consumer_key:         'SR012x1tWxTIMUKCOLW67ybiB',
    consumer_secret:      '4sP0j0odnQBu0tKiXQfEOj1Q5cfKzGmHbiOuKI3EzoW9R6jTbY',
    access_token:         '30905483-iW2tUhLCzIuQmf8OFtYSCTRqLz9sh5YGaz6r49571',
    access_token_secret:  'PejR8yEH0VmpuRtofgMpDvc4rm9HZKQnvP5ip6wxy05CF',
});

T.post('statuses/update', { status: '@Teburninator meet ur new twitter bot overlord' }, function(err, data, response) {
  console.log(data)
})
