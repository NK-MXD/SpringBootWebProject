package com.yf.exam.modules.qu.enums;


/**
 * 题目类型
 * @author 软工小队
 */
public interface QuType {

    /**
     * 单选题
     */
    Integer RADIO = 1;

    /**
     * 多选题
     */
    Integer MULTI = 2;

    /**
     * 判断题
     */
    Integer JUDGE = 3;

    /**
     * 主观题
     */
    Integer TEXT = 4;
    
}
