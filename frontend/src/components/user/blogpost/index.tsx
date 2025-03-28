import { useDispatch, useSelector } from "react-redux";
import { setViewMode } from "@/store/slices/blogSlice";
import type { RootState } from "@/store/store";
import { Editor } from "./Editor";
import { BlogList } from "./BlogList";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPostEditor() {
  const dispatch = useDispatch();
  const viewMode = useSelector((state: RootState) => state.blogEditor.viewMode);

  return (
    <div className="flex justify-center p-8">
      <Card className="w-full max-w-3xl border rounded-xl">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <div className="flex gap-2">
            <Button
              variant="ghost"
              className={`relative px-4 py-2 text-sm font-medium transition ${
                viewMode === "editor" ? "text-primary after:w-full after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0" : "text-muted-foreground"
              }`}
              onClick={() => dispatch(setViewMode("editor"))}
            >
              New Post
            </Button>

            <Button
              variant="ghost"
              className={`relative px-4 py-2 text-sm font-medium transition ${
                viewMode === "blogs" ? "text-primary after:w-full after:h-[2px] after:bg-primary after:absolute after:bottom-0 after:left-0" : "text-muted-foreground"
              }`}
              onClick={() => dispatch(setViewMode("blogs"))}
            >
              View Blogs
            </Button>
          </div>
        </div>
        <div className="p-6 space-y-6">{viewMode === "editor" ? <Editor /> : <BlogList />}</div>
      </Card>
    </div>
  );
}
