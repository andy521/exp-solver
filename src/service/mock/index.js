/**
 * 模拟数据
 */
export default function intercepter(mock) {
  // 仓库信息发布
  mock.onPost('/match_storehouse', {
    amount: 10,
    start_time: '2017-04-14 20:00:00',
    duration: 2,
    rent_want: 1
  }).reply(200, {
    status: 1
  });
  // 显示所有发布信息
  mock.onGet('/list_storerecords').reply(200, [
    {
      start_time: "2017-04-14 20:00:00",
      duration: 90,
      number_code: 1,
      rent_want: 1,
      matched_pairs: ['xx', 'yy'],
      amount: 40,
      if_matched: 1
    },
    {
      start_time: "2017-04-14 20:00:00",
      duration: 90,
      number_code: 1,
      rent_want: 1,
      matched_pairs: ['xx', 'yy'],
      amount: 40,
      if_matched: 0
    },
    {
      start_time: "2017-04-14 20:00:00",
      duration: 90,
      number_code: 1,
      rent_want: 1,
      matched_pairs: ['xx', 'yy'],
      amount: 40,
      if_matched: 1
    }
  ]);
  // 获取匹配结果
  mock.onGet('/get_matched_storerecords', {
    params: {
      number_code: 1 //和显示发布信息这里code的一样
    }
  }).reply(200, {
    start_time: "2017-04-14 20:00:00",
    duration: 90,
    number_code: 1,
    rent_want: 1,
    if_matched: 1,
    matched_pairs: ['xx', 'yy'],
    amount: '40'
  });


  // 车辆信息发布
  mock.onPost('/match_vehicle', {
    rent_want: 0,
    start_time: '2017-04-14 20:00:00',
    duration: 2,
    quantity: 20,
    if_vehicle: 1
  }).reply(200, {
    status: 1
  });
  // 展示车辆信息
  mock.onGet('/list_vechileinfos').reply(200, [
    {
      rent_want: 0,
      number_code: 1,
      start_time: '2017-04-14 20:00:00',
      quantity: 40,
      if_vehicle: 1,
      if_matched: 1,
      matchPairs: ['zz', 'aa', 'qq'],
      end_time: "2017-04-12 22:20:00"
    },
    {
      rent_want: 1,
      number_code: 2,
      start_time: '2017-04-14 20:00:00',
      quantity: 40,
      if_vehicle: 1,
      if_matched: 0,
      matchPairs: ['zz', 'aa', 'qq'],
      end_time: "2017-04-12 22:20:00"
    },
    {
      rent_want: 0,
      number_code: 3,
      start_time: '2017-04-14 20:00:00',
      quantity: 40,
      if_vehicle: 1,
      if_matched: 0,
      matchPairs: ['zz', 'aa', 'qq'],
      end_time: "2017-04-12 22:20:00"
    }
  ]);
  // 获取匹配结果
  mock.onGet('/get_matched_vehicle', {
    params: {
      number_code: 1 //和显示发布信息这里code的一样
    }
  }).reply(200, {
    rent_want: 0,
    start_time: '2017-04-14 20:00:00',
    quantity: 40,
    if_vehicle: 1,
    if_matched: 1,
    matchPairs: ['zz', 'aa', 'qq'],
    end_time: "2017-04-12 22:20:00"
  });

  // 路径匹配
  mock.onGet('/path_recommend', {
    params: {
      startVertex: 'V0',
      endVertex: 'V7',
      proportion: 0.5
    }
  }).reply(200, {
    results: 'V0 --> V1 --> V3 --> V5 --> V7'
  });
  // 登录,测试账号
  mock.onPost('/login', {
    params: {
      username: 'test',
      password: '123'
    }
  }).reply(200, {
    status: 1
  });
}
