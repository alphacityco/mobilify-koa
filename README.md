# mobilify-koa


### Heroku

    heroku create <APP_NAME>
    heroku addons:add mongolab
    heroku config:add NODE_ENV=production
    git push heroku master

### Docs

https://devcenter.heroku.com/articles/node-cluster

http://nodejs.org/api/cluster.html

https://github.com/jimbojw/node-zmq-talk

http://www.hward.com/zeromq-on-heroku/

ab -n 1000 -c 4 https://mobilify-testing.herokuapp.com/articles

Server Software:        Cowboy
Server Hostname:        mobilify-testing.herokuapp.com
Server Port:            443
SSL/TLS Protocol:       TLSv1,DHE-RSA-AES128-SHA,2048,128

Document Path:          /articles
Document Length:        19 bytes

Concurrency Level:      1
Time taken for tests:   598.272 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      186000 bytes
HTML transferred:       19000 bytes
Requests per second:    1.67 [#/sec] (mean)
Time per request:       598.272 [ms] (mean)
Time per request:       598.272 [ms] (mean, across all concurrent requests)
Transfer rate:          0.30 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:      396  442  18.5    441     541
Processing:   131  156  42.9    151    1208
Waiting:      131  154  42.4    150    1190
Total:        536  598  47.0    596    1679

Percentage of the requests served within a certain time (ms)
  50%    596
  66%    602
  75%    608
  80%    612
  90%    622
  95%    636
  98%    649
  99%    663
 100%   1679 (longest request)

----------------------------------------

Server Software:        Cowboy
Server Hostname:        mobilify-testing.herokuapp.com
Server Port:            443
SSL/TLS Protocol:       TLSv1,DHE-RSA-AES128-SHA,2048,128

Document Path:          /articles
Document Length:        19 bytes

Concurrency Level:      4
Time taken for tests:   169.871 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      186000 bytes
HTML transferred:       19000 bytes
Requests per second:    5.89 [#/sec] (mean)
Time per request:       679.485 [ms] (mean)
Time per request:       169.871 [ms] (mean, across all concurrent requests)
Transfer rate:          1.07 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:      454  504  43.0    499    1651
Processing:   151  174  22.4    169     615
Waiting:      150  171  19.4    167     513
Total:        606  678  48.5    673    1823

Percentage of the requests served within a certain time (ms)
  50%    673
  66%    684
  75%    693
  80%    698
  90%    712
  95%    727
  98%    745
  99%    761
 100%   1823 (longest request)
