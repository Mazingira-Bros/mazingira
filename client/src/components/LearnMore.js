import React from 'react'

function LearnMore() {
  return (
    <div>LearnMore</div>
  )
}

export default LearnMore


#include <bits/stdc++.h>

int solution(vector<int> &A)-  {
  //c++
  int i, count=0;
  int n=A.size()
  for(i=1; i<n; i+=2){
    if((A[i-1] +A[i])%2==0)
    count++;
  }
  return count
}