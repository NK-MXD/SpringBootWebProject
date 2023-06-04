package com.yf.exam.modules.qu.dto.ext;

import com.yf.exam.modules.qu.dto.QuAnswerDTO;
import com.yf.exam.modules.qu.dto.QuDTO;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
* <p>
* 问题题目请求类
* </p>
*
* @author  软工小队
*/
@Data
@ApiModel(value="问题题目详情", description="问题题目详情")
public class QuDetailDTO extends QuDTO {

    private static final long serialVersionUID = 1L;
    
    
    @ApiModelProperty(value = "备选项列表", required=true)
    private List<QuAnswerDTO> answerList;

    @ApiModelProperty(value = "题库列表", required=true)
    private List<String> repoIds;

    
}
