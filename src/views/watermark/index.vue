<template>
  <div class="flex flex-col items-center">
    <div class="w-500px h-300px">
      <img id="img1" class="object-contain w-full h-full" :src="url" alt="" srcset="" />
    </div>
    <div class="flex flex-col items-center">
      <n-upload @change="handleChange">
        <n-button>上传文件</n-button>
      </n-upload>

      <p>设备: {{ make }}</p>
      <p>型号: {{ model }}</p>

      <p>曝光时间: {{ exposureTime }}</p>
      <p>光圈: {{ fNumber }}</p>
      <p>焦距: {{ focalLength }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UploadFileInfo } from "naive-ui";
import { ref } from "vue";
import * as ExifReader from "exifreader";

const url = ref("");
const make = ref("");
const model = ref("");
const exposureTime = ref("");
const fNumber = ref("");
const focalLength = ref("");

const handleChange = async (options: { file: UploadFileInfo }) => {
  const file = options.file.file;

  if (!file) return;
  url.value = URL.createObjectURL(file);

  const tags = await ExifReader.load(file, { length: 128 * 1024 });
  console.log("🚀 ~ handleChange ~ tags:", tags);
  make.value = tags.Make?.description || "";
  model.value = tags.Model?.description || "";
  exposureTime.value = tags.ExposureTime?.description || "";
  fNumber.value = tags.FNumber?.description || "";
  focalLength.value = tags.FocalLength?.description || "";
  //   const img1 = document.getElementById("img1");
  //   if (!img1) return;

  //   img1.onload = () => {
  //     console.log("🚀 ~ handleChange ~ img1:", img1);
  //     EXIF.getData(img1, function () {
  //       var make = EXIF.getTag(this, "Make");
  //       var model = EXIF.getTag(this, "Model");
  //       console.log("🚀 ~ model:", make, model);
  //     });
  //   };
};
</script>

<style></style>
