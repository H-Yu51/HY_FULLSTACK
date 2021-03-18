const intersect = (nums1,nums2) => {
    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a-b);
    console.log(nums1);
    console.log(nums2);
    const res = [];
    let p1 = 0;                  // p1扫描nums1
    let p2 = 0;                  // p2扫描nums2
    while (p1 < nums1.length && p2 < nums2.length) { // 用&& 因为有一个越界就不能找交集
      if (nums1[p1] > nums2[p2]) { // p1指向的数大，移动p2，期待扫到一样大的
        p2++;
      } else if (nums1[p1] < nums2[p2]) { // p2指向的数大，移动p1，期待扫到一样大的
        p1++;
      } else {                   // 遇到相同的，推入res数组，两指针均右移考察下一个
        res.push(nums1[p1]);
        p1++;
        p2++;
      }
    }
    return res;


}


console.log(intersect([1,2,2,1],[2,2]));
console.log(intersect( [4,9,5],[9,4,9,8,4]));
