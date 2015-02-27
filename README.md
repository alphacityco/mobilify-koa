# mobilify-koa


### Heroku

    heroku create <APP_NAME>
    heroku addons:add mongolab
    heroku config:add NODE_ENV=production
    git push heroku master

### Benchmark

Server Software:        Cowboy
Server Hostname:        mobilify-testing.herokuapp.com
Server Port:            443
SSL/TLS Protocol:       TLSv1,DHE-RSA-AES128-SHA,2048,128

Document Path:          /articles
Document Length:        19 bytes

Concurrency Level:      1
Time taken for tests:   600.604 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      186000 bytes
HTML transferred:       19000 bytes
Requests per second:    1.66 [#/sec] (mean)
Time per request:       600.604 [ms] (mean)
Time per request:       600.604 [ms] (mean, across all concurrent requests)
Transfer rate:          0.30 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:      396  447  48.0    444    1477
Processing:   133  154  16.6    150     450
Waiting:      132  151  14.6    148     377
Total:        529  600  50.4    597    1626

Percentage of the requests served within a certain time (ms)
  50%    597
  66%    605
  75%    610
  80%    613
  90%    625
  95%    635
  98%    652
  99%    669
 100%   1626 (longest request)

----------------------------------------

Server Software:        Cowboy
Server Hostname:        mobilify-testing.herokuapp.com
Server Port:            443
SSL/TLS Protocol:       TLSv1,DHE-RSA-AES128-SHA,2048,128

Document Path:          /articles
Document Length:        19 bytes

Concurrency Level:      4
Time taken for tests:   152.738 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      186000 bytes
HTML transferred:       19000 bytes
Requests per second:    6.55 [#/sec] (mean)
Time per request:       610.951 [ms] (mean)
Time per request:       152.738 [ms] (mean, across all concurrent requests)
Transfer rate:          1.19 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:      395  456  70.5    448    1489
Processing:   131  153  21.2    149     547
Waiting:      131  152  20.8    147     547
Total:        532  610  73.7    600    1628

Percentage of the requests served within a certain time (ms)
  50%    600
  66%    611
  75%    620
  80%    626
  90%    643
  95%    666
  98%    720
  99%    783
 100%   1628 (longest request)
