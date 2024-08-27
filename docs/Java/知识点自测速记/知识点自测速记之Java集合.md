---
title: '知识点自测速记之Java集合'
---

> 这篇文章以问答的形式用于快速回顾知识点以及用于自测。  
> 因为知识点相当多，即使在看时能够理解记住，但过后也往往只是有印象，大概知道是什么东西，但想回答出来却总是卡壳，看了忘，忘了看。因此，这篇文章用于帮助速记回忆，自测时可以由这些点延伸。 
> 注：参考的主要是 Guide 哥的网站内容以及 chatGPT。


## 集合概述

#### Java 集合概述？
Java 集合，也叫容器 ，主要由两大接口派生而来：一个是 `Collection` 接口，主要用于存放单一元素；另一个是 `Map` 接口，主要用于存放键值对。对于 `Collection` 接口，下面又有三个主要的子接口：`List`、`Set` 和 `Queue`。

#### 说说 List、Set、Queue、Map 的区别？
- List：存储的元素是有序的、可重复的。
- Set：存储的元素不可重复。
- Queue：存储的元素有序、可重复，按特定排队规则确定先后顺序。
- Map：key 无序、不可重复，value 无序、可重复。

#### 如何选用集合？
- 需要键值获取到元素值时就选用 `Map` 接口下的集合，需要排序时选择 `TreeMap`，不需要排序时就选择 `HashMap`，需要保证线程安全就选用 `ConcurrentHashMap`。
- 只需要存放元素值时，就选择实现 `Collection` 接口的集合，需要保证元素唯一时选择实现 `Set` 接口的集合比如 `TreeSet` 或 `HashSet`，不需要就选择实现 `List` 接口的比如 `ArrayList` 或 `LinkedList`。

#### 为什么要使用集合？
与数组相比，Java 集合提供了更灵活、更有效的方法来存储多个数据对象。Java 集合框架中的各种集合类和接口可以存储不同类型和数量的对象，同时还具有多样化的操作方式。相较于数组，Java 集合的优势在于它们的大小可变、支持泛型、具有内建算法等。




## Collection 子接口之 List

#### ArrayList 和 Array 的区别？
- `ArrayList` 内部基于动态数组实现，会根据实际存储的元素动态地扩容或缩容；`Array` 内部是静态数组，被创建之后就不能改变长度了。
- `ArrayList` 允许使用泛型来确保类型安全，`Array` 则不可以。
- `ArrayList` 中只能存储对象，而 `Array` 可以存储基本类型数据和对象。
- `ArrayList` 支持插入、删除、遍历等常见操作，并且提供了丰富的 API 操作方法，比如 `add()`、`remove()`。`Array` 只是固定长度的数组，只能按下标访问元素，不具备动态添加删除元素的能力。
- `ArrayList` 创建时不需要指定大小，而 `Array` 创建时必须指定大小。

#### ArrayList 和 Vector 的区别？（了解）
- `ArrayList` 是 `List` 的主要实现类，底层使用 `Object[]` 存储，适用于频繁的查找工作，线程不安全 。
- `Vector` 是 `List` 的古老实现类，底层使用 `Object[]` 存储，线程安全。

#### Vector 和 Stack 的区别？（了解）
- `Vector` 和 `Stack` 两者都是线程安全的，都是使用 `synchronized` 关键字进行同步处理。
- `Stack` 继承自 `Vector`，是一个后进先出的栈，而 `Vector` 是一个列表。

#### ArrayList 可以添加 null 值吗？
`ArrayList` 中可以存储任何类型的对象，包括 `null` 值，但不建议。

#### ArrayList 插入和删除元素的时间复杂度？
对于插入：   
- 头部插入：由于需要将所有元素都依次向后移动一个位置，因此时间复杂度是 O(n)。
- 尾部插入：当 ArrayList 的容量未达到极限时，往列表末尾插入元素的时间复杂度是 O(1)，因为它只需要在数组末尾添加一个元素即可；当容量已达到极限并且需要扩容时，则需要执行一次 O(n) 的操作将原数组复制到新的更大的数组中，然后再执行 O(1) 的操作添加元素。
- 指定位置插入：需要将目标位置之后的所有元素都向后移动一个位置，然后再把新元素放入指定位置。这个过程需要移动平均 n/2 个元素，因此时间复杂度为 O(n)。

对于删除：   
- 头部删除：由于需要将所有元素依次向前移动一个位置，因此时间复杂度是 O(n)。
- 尾部删除：当删除的元素位于列表末尾时，时间复杂度为 O(1)。
- 指定位置删除：需要将目标元素之后的所有元素向前移动一个位置以填补被删除的空白位置，因此需要移动平均 n/2 个元素，时间复杂度为 O(n)。

#### LinkedList 插入和删除元素的时间复杂度？
- 头部插入/删除：只需要修改头结点的指针即可完成插入/删除操作，因此时间复杂度为 O(1)。
- 尾部插入/删除：只需要修改尾结点的指针即可完成插入/删除操作，因此时间复杂度为 O(1)。
- 指定位置插入/删除：需要先移动到指定位置，再修改指定节点的指针完成插入/删除，因此需要移动平均 n/2 个元素，时间复杂度为 O(n)。

#### LinkedList 为什么不能实现 `RandomAccess` 接口？
`RandomAccess` 是一个标记接口，用来表明实现该接口的类支持随机访问（即可以通过索引快速访问元素）。由于 `LinkedList` 底层数据结构是链表，内存地址不连续，只能通过指针来定位，不支持随机快速访问，所以不能实现 `RandomAccess` 接口。

#### ArrayList 和 LinkedList 的区别？
- **底层数据结构**：`ArrayList` 底层使用的是 `Object` 数组；`LinkedList` 底层使用的是双向链表数据结构。
- **是否线程安全**：两者都不是线程安全的。
- **插入和删除元素的时间复杂度不一样**：`ArrayList` 头部 O(n)，尾部 O(1) 或 O(n)，指定位置 O(n)；`LinkedList` 头部和尾部 O(1)，指定位置 O(n)。
- **是否支持快速随机访问**：`ArrayList` 支持，`LinkedList` 不支持。
- **内存占用**：`ArrayList` 的空间浪费主要体现在在 `list` 列表的结尾会预留一定的容量空间，而 `LinkedList` 的空间花费则体现在它的每一个元素都需要消耗更多的空间（因为要存放直接后继和直接前驱以及数据）。

#### 双向列表和双向循环链表？
- 双向链表：包含两个指针，一个 `prev` 指向前一个节点，一个 `next` 指向后一个节点。
- 双向循环链表：最后一个节点的 `next` 指向 `head`，而 `head` 的 `prev` 指向最后一个节点，构成一个环。

#### RandomAccess 接口？
实际上 `RandomAccess` 接口中什么都没有定义，它只是一个标识，标识实现这个接口的类具有随机访问功能。

#### 说一说 ArrayList 的扩容机制？
1. 当需要添加一个新元素到 `ArrayList` 中时，首先检查当前元素个数是否达到了数组的容量上限。如果达到了容量上限，则需要进行扩容操作。
2. 扩容操作开始时，`ArrayList` 会创建一个新的数组，其大小通常是当前容量的 1.5 倍(具体的增长因子可以根据实现而有所不同)。
3. `ArrayList` 会将原数组中的所有元素复制到新的数组中。这个过程通过使用 `System.arraycopy()` 方法或类似的手动复制操作来完成。
4. 复制完成后，`ArrayList` 更新内部的数组引用指向新的数组，并丢弃旧的数组。



## Collection 子接口之 Set

#### Comparable 接口和 Comparator 接口有什么区别？
- `Comparable` 接口实际上是出自 `java.lang` 包 它有一个 `compareTo(Object obj)` 方法用来排序。
- `Comparator` 接口实际上是出自 `java.util` 包它有一个 `compare(Object obj1, Object obj2)` 方法用来排序。


#### 无序性和不可重复性的含义是什么？
- 无序性不等于随机性，无序性是指存储的数据在底层数组中并非按照数组索引的顺序添加，而是根据数据的哈希值决定的。
- 不可重复性是指添加的元素按照 `equals()` 判断时，返回 `false`，需要同时重写 `equals()` 方法和 `hashCode()` 方法。

#### 比较 HashSet、LinkedHashSet、TreeSet 的异同？
- `HashSet`、`LinkedHashSet` 和 `TreeSet` 都是 `Set` 接口的实现类，都能保证元素唯一，并且都不是线程安全的。
- `HashSet`、`LinkedHashSet` 和 `TreeSet` 的主要区别在于底层数据结构不同。`HashSet` 的底层数据结构是哈希表（基于 `HashMap` 实现）。`LinkedHashSet` 的底层数据结构是链表和哈希表，元素的插入和取出顺序满足 FIFO。`TreeSet` 底层数据结构是红黑树，元素是有序的，排序的方式有自然排序和定制排序。
- 底层数据结构不同又导致这三者的应用场景不同。`HashSet` 用于不需要保证元素插入和取出顺序的场景，`LinkedHashSet` 用于保证元素的插入和取出顺序满足 FIFO 的场景，`TreeSet` 用于支持对元素自定义排序规则的场景。



## Collection 子接口之 Queue

#### Queue 和 Deque 的区别？
- `Queue` 是单端队列，只能从一端插入元素，另一端删除元素，实现上一般遵循先进先出（FIFO）规则。`Deque` 是双端队列，在队列的两端均可以插入或删除元素。
- `Deque` 扩展了 `Queue` 的接口, 增加了在队首和队尾进行插入和删除的方法，如 `addFirst()`、`addLast()`。

#### ArrayDeque 和 LinkedList 的区别？
`ArrayDeque` 和 `LinkedList` 都实现了 `Deque` 接口，两者都具有队列的功能，主要区别如下：
- `ArrayDeque` 是基于可变长的数组和双指针来实现，而 `LinkedList` 则通过链表来实现。
- `ArrayDeque` 不支持存储 `NULL` 数据，但 `LinkedList` 支持。
- `ArrayDeque` 是在 JDK1.6 才被引入的，而 `LinkedList` 早在 JDK1.2 时就已经存在。
- `ArrayDeque` 插入时可能存在扩容过程, 不过均摊后的插入操作依然为 O(1)。虽然 `LinkedList` 不需要扩容，但是每次插入数据时均需要申请新的堆空间，均摊性能相比更慢。

#### 说一说 PriorityQueue？(面试手撕算法出现)
`PriorityQueue` 是在 JDK1.5 中被引入的, 其与 `Queue` 的区别在于元素出队顺序是与优先级相关的，即总是优先级最高的元素先出队。这里列举其相关的一些要点：   
- `PriorityQueue` 利用了二叉堆的数据结构来实现的，底层使用可变长的数组来存储数据。 
- `PriorityQueue` 通过堆元素的上浮和下沉，实现了在 O(logn) 的时间复杂度内插入元素和删除堆顶元素。
- `PriorityQueue` 是非线程安全的，且不支持存储 `NULL` 和 `non-comparable` 的对象。
- `PriorityQueue` 默认是小顶堆，但可以接收一个 `Comparator` 作为构造参数，从而来自定义元素优先级的先后。



## Map 接口

#### HashMap 和 HashTable 的区别？
- **线程是否安全**：`HashMap` 是非线程安全的，`HashTable` 是线程安全的，因为 `HashTable` 内部的方法基本都经过 `Synchronized` 修饰。
- **效率**：因为线程安全的问题，`HashMap` 比 `HashTable` 效率高一点。
- **对 Null Key 和 Null value 的支持**：`HashMap` 可以存储 `null` 的 `key` 和 `value`，但 `null` 作为键只能有一个，`null` 作为值可以有多个；`Hashtable` 不允许有 `null` 键和 `null` 值，否则会抛出 `NullPointerException`。
- **初始容量大小和每次扩充容量大小的不同**：一、创建时如果不指定容量初始值，`HashTable` 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。`HashMap` 默认的初始化大小为 16，之后每次扩充，容量变为原来的 2 倍。二、创建时如果给定了容量初始值，那么 `HashTable` 会直接使用你给定的大小，而 `HashMap` 会将其扩充为 2 的幂次方大小。也就是说 `HashMap` 总是使用 2 的幂作为哈希表的大小。
- **底层数据结构**：JDK1.8 以后的 `HashMap` 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）时，将链表转化为红黑树（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树），以减少搜索时间。`HashTable` 没有这样的机制。

#### HashMap 和 HashSet 的区别？
`HashSet` 底层就是基于 `HashMap` 实现的，在底层实现上区别不大。

#### HashMap 和 TreeMap 的区别？
- `TreeMap` 和 `HashMap` 都继承自 `AbstractMap`，但是需要注意的是 `TreeMap` 它还实现了 `NavigableMap` 接口和 `SortedMap` 接口。    
- 实现 `NavigableMap` 接口让 `TreeMap` 有了对集合内元素搜索的能力。
- 实现 `SortedMap` 接口让 `TreeMap` 有了对集合内元素根据键排序的能力，默认是按 key 的升序排序，不过也可以指定排序的比较器。

#### HashSet 如何检查重复？
当你把对象加入 `HashSet` 时，`HashSet` 会先计算对象的 `hashcode` 值来判断对象加入的位置，同时也会与其他加入的对象的 `hashcode` 值作比较，如果没有相符的 `hashcode`，`HashSet` 会假设对象没有重复出现。但是如果发现有相同 `hashcode` 值的对象，这时会调用 `equals()` 方法来检查 `hashcode` 相等的对象是否真的相同。如果两者相同，`HashSet` 就不会让加入操作成功。   

因为 `HashSet` 实际是通过 `HashMap` 实现的，在 JDK1.8 中，`HashSet` 的 `add()` 方法只是简单的调用了 `HashMap` 的 `put()` 方法，并且判断了一下返回值以确保是否有重复元素。

#### HashMap 的底层实现？
JDK1.8 之前 `HashMap` 底层是 **数组和链表** 结合在一起使用也就是 **链表散列**。`HashMap` 通过 key 的 `hashcode` 经过扰动函数处理过后得到 `hash` 值，然后通过 `(n - 1) & hash` 判断当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 `hash` 值以及 key 是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。所谓扰动函数指的就是 `HashMap` 的 `hash` 方法。使用 `hash` 方法也就是扰动函数是为了防止一些实现比较差的 `hashCode()` 方法 换句话说使用扰动函数之后可以减少碰撞。

#### HashMap 的长度为什么是 2 的幂次方？

#### HashMap 多线程操作会导致死循环问题？

#### HashMap 由哪几种常见的遍历方法？

#### ConcurrentHashMap 和 HashTable 的区别？

#### ConcurrentHashMap 线程安全的具体实现方式？

#### JDK1.7 和 JDK1.8 的 ConcurrentHashMap 有什么不同？




