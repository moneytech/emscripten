function shifty($id2) {
  var $tp$s2;
  var $parameters_addr$s2;
  var $wavelet38$s2;
  var _dwt_norms_real$s2;
  var $a_addr$s2;
  var _idents$s2;
  var $id3$s3;
  var $id2$s1 = $id2 >> 1;
  q(HEAP32[$id >> 2]);
  q(HEAP32[$id + 40 >> 2]);
  q(HEAP32[$id + 80 >> 2]);
  q(HEAP32[unknown1 + unknown2 + $id >> 2]);
  q(HEAP32[unknown1 + $id + unknown2 >> 2]);
  var localUnchanged1 = get(1), localUnchanged2 = get(1);
  q(HEAP32[localUnchanged1 + $id + localUnchanged2 >> 2]);
  q($id >> _something_);
  $id = q("..");
  q($id << _somethingElse_);
  pause(-1);
  q(HEAP32[$id2$s1]);
  q(HEAP32[$id2$s1]);
  q(HEAP32[$id2$s1]);
  q(HEAP32[$id2$s1]);
  q(HEAP32[$id2$s1 + 20]);
  q(HEAP32[$id2$s1 + 40]);
  var $id3 = get(74), $id3$s3 = $id3 >> 3;
  q(HEAP32[$id3$s3]);
  q(HEAP32[$id3$s3 + 5]);
  q(HEAP32[$id3$s3 + 10]);
  q($id3);
  pause(0);
  var _idents = get("abc"), _idents$s2 = _idents >> 2;
  q(HEAP32[HEAP32[_idents$s2] + 8 >> 2]);
  q(HEAP32[HEAP32[_idents$s2] + 8 >> 2]);
  q(HEAP32[HEAP32[_idents$s2] + 8 >> 2]);
  pause(1);
  var $sn_addr = get(12), $a_addr = get(999), $a_addr$s2 = $a_addr >> 2;
  var $i = get(112233);
  q(HEAP32[($sn_addr - 1 << 1) + $a_addr$s2 + 1]);
  q(HEAP32[($i - 1 << 1) + $a_addr$s2 + 1]);
  q(HEAP32[($i << 1) + $a_addr$s2]);
  q(HEAP32[$a_addr$s2 + $i]);
  q($a_addr$s2, z($a_addr$s2));
  pause(2);
  var $level = HEAP[get(322) >> 2];
  var _dwt_norms_real = get("a"), _dwt_norms_real$s2 = _dwt_norms_real >> 2, $orient = get("cheez");
  q(HEAP32[($level << 1) + _dwt_norms_real$s2 + ($orient * 20 | 0)]);
  q(HEAP32[($level << 1) + _dwt_norms_real$s2 + ($orient * 20 | 0) + 1]);
  q(HEAP32[($level << 1) + _dwt_norms_real$s2 + ($orient * 20 | 0) + 2]);
  pause(3);
  var $wavelet38 = get(38), $wavelet38$s2 = $wavelet38 >> 2;
  $k = $a_addr;
  q(HEAPF32[HEAP32[$wavelet38$s2] + ($k << 4) + 8 >> 2]);
  q(HEAPF32[HEAP32[$wavelet38$s2] + ($k << 4) + 12 >> 2]);
  q(HEAPF32[HEAP32[$wavelet38$s2] + ($k << 4) + 400 >> 2]);
  pause(4);
  var $p = $k, $parameters_addr = get("burger"), $parameters_addr$s2 = $parameters_addr >> 2;
  q(HEAP32[$parameters_addr$s2 + $p + 1406]);
  q(HEAP32[$parameters_addr$s2 + $p + 1411]);
  q(HEAP32[$parameters_addr$s2 + $p + 1416]);
  pause(5);
  var $res_spec242 = get($real), $cp = get("b"), $tileno = arguments[2];
  q(HEAP32[$parameters_addr$s2 + ($res_spec242 - 1) + 1406]);
  q(HEAP32[(HEAP32[$cp + 108 >> 2] + 420 >> 2) + ($tileno * 1397 | 0)]);
  pause(6);
  q($idx << 3);
  q(1 << $idx << 1);
  print(INDENT + "Entering: _main" + "hi");
  pause(7);
  var $tp = get("tp"), $tp$s2 = $tp >> 2;
  q($tp$s2);
  q($tp$s2);
  q($tp$s2);
  HEAP32[$H400] = $tp;
  HEAP32[$tp] = 5;
  HEAP32[$tp$s2] = 5;
  HEAP32[HEAP[$tp$s2]] = 5;
  HEAP32[HEAP[$tp$s2] >> 2] = 5;
  pause(7);
  q(go());
  q(go() >> 8 << 8);
  q(go() + 2 >> 2);
  pause(7.5);
}
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["shifty"]
