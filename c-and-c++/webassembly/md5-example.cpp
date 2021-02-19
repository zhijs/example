#include <iostream>
#include "md5.h"

using namespace std;

md5::MD5 imd5;

extern "C" {
  char* getMd5(char pr[]);
}

extern "C" {
  void printMd5();
}

extern "C" {
  void printText(char pr[]);
}

char result[64];

// 成功之后将地址返回给调用处
char* getMd5(char pr[]) {
  strcpy(result, imd5.digestString(pr));
  cout<< result << endl;
  return result;
}


// 检验是否可以正常输出 md5
void printMd5 () {
  char text[] = "hello world";
  cout<< imd5.digestString(text) << endl;
}

// 检验文件内容是否正常传输
void printText (char pr[]) {
  cout<< pr << endl;
}



