#include <iostream>
// #include "md5.h";
#include <string>

using namespace std;

extern "C" { 
  int add(int a, int b);
}
// extern "C" {
//   string getMd5();
// }

extern "C" {
  int mylog(int *p);  
}
int add(int a, int b);
int mylog( int *p);

int add (int a, int b) {
  return a + b;
}

int mylog (int *p) {
  return (10 + *p);
}