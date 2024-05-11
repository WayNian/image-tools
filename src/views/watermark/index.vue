<template>
  <div class="flex flex-col items-center">
    <div class="w-500px h-300px">
      <img
        id="img1"
        class="object-contain w-full h-full"
        src="../../assets/Bush-dog.jpg"
        alt=""
        srcset=""
        @click="handleClick"
      />
    </div>
    <n-upload @change="handleChange">
      <n-button>上传文件</n-button>
    </n-upload>

    <div>转换</div>
  </div>
</template>

<script setup lang="ts">
import type { UploadFileInfo } from "naive-ui";
import EXIF from "exif-js";
import { ref } from "vue";

const url = ref("");
const handleChange = (options: { file: UploadFileInfo }) => {
  const file = options.file.file;

  if (!file) return;
  url.value = URL.createObjectURL(file);

  const img1 = document.getElementById("img1");
  if (!img1) return;

  img1.onload = () => {
    console.log("🚀 ~ handleChange ~ img1:", img1);
    EXIF.getData(img1, function () {
      var make = EXIF.getTag(this, "Make");
      var model = EXIF.getTag(this, "Model");
      console.log("🚀 ~ model:", make, model);
    });
  };
};

const handleClick = () => {
  const img1 = document.getElementById("img1");
  if (!img1) return;
  console.log("🚀 ~ handleClick ~ img1:", img1);
  EXIF.getData(img1, function () {
    // var make = EXIF.getTag(this, "Make");
    // var model = EXIF.getTag(this, "Model");
    // console.log("🚀 ~ model:", make, model);
  });
};
</script>

<style></style>
