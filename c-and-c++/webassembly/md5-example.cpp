#include <iostream>
#include "md5.h"
#include <string>

using namespace std;

md5::MD5 imd5;

extern "C" {
  char* getMd5(char* pr, int len);
}

extern "c" {
  void printMd5();
}

char* getMd5(char* pr, int len) {
  return imd5.digestString(pr);
}

char *text = "hello world";

cout<< imd5.digestString(*text) << endl;


