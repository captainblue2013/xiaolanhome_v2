
听说GEO快要出来了，还没了解到具体原理，
不过在这之前，我倒是用redis实现了基于地理位置的处理。
# 有点绕，有更好办法的欢迎指出。
**zset** 、 **sinter** 
### 基础一
zset是set的一个特殊表现，它可以给每个成员附加一个score排序，从小到大。
zset的一个灵活应用在于范围查询，比如你存储的member是uid，score是年龄，
那你可以用 `ZRANGEBYSCORE  key 18 22`来查询18到22岁的uid集合
### 基础二
sinter 文档只看到对set的操作，它是取两个集合的交集，（有看到支持zset的请通知我一下）。
比如，集合test1 = [ 1 , 2 , 3 ]，集合test2 ＝ [ 2 , 3 , 4],   （test1、 test2是两个set，这里用数组表示）
那么，sinter test1 test2 就会返回 ［2，3］
### 实现
1.参考基础一，以 uid(用户) 或 place(地点) 作为member，**经度** 作为 score 存储一个zset   set1，
2.同样，参考基础一，以 uid(用户) 或 place(地点) 作为member，**纬度** 作为 score 存储一个zset  set2，
3.根据基础一的范围查询，分别查询两个zset在某个经度（纬度）范围内的结果，得到两个临时结果  **无序set** 3.1  （把两个临时结果存放在 set 里，用完后自行删除）
4.这两个临时set做交集，就能得到既在某经度范围内，也在某纬度范围内的坐标了
