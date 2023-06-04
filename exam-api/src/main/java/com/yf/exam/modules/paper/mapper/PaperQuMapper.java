package com.yf.exam.modules.paper.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yf.exam.modules.paper.dto.ext.PaperQuDetailDTO;
import com.yf.exam.modules.paper.entity.PaperQu;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
* <p>
* 试卷考题Mapper
* </p>
*
* @author  软工小队
*/
public interface PaperQuMapper extends BaseMapper<PaperQu> {

    /**
     * 统计客观分
     * @param paperId
     * @return
     */
    int sumObjective(@Param("paperId") String paperId);

    /**
     * 统计主观分
     * @param paperId
     * @return
     */
    int sumSubjective(@Param("paperId") String paperId);

    /**
     * 找出全部试题列表
     * @param paperId
     * @return
     */
    List<PaperQuDetailDTO> listByPaper(@Param("paperId") String paperId);
}


